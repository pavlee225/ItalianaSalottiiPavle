import React, {useState} from 'react';
import {collection, onSnapshot, query, QueryConstraint} from 'firebase/firestore';
import useDeepCompareEffect from 'use-deep-compare-effect';
import {firestore} from "../../firebaseConfig";
import { parseFirestoreDocumentData } from '../../utils/parseFirestoreDocumentData';

interface DataI<T> {
  data: T[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OptionsI<T> {
  queryConstraints?: QueryConstraint[];
  parser?: (data: T) => T;
  asyncParser?: (data: T) => Promise<T>;
}

export const useFirestoreCollection = <T>(path: string, options: OptionsI<T & { id: string }> = {}): DataI<T> => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const {queryConstraints = [], parser, asyncParser} = options;
  useDeepCompareEffect(() => {
    setLoading(true);
    // Call on umount to unsubscribe
    return onSnapshot(
      query(
        collection(firestore, path),
        ...queryConstraints,
      ),
      async snapshot => {
        const collection = await Promise.all(snapshot.docs.map(async doc => {
          let parsedDoc = parseFirestoreDocumentData<T>(doc);
          if (parser) {
            parsedDoc = parser(parsedDoc);
          }
          if (asyncParser) {
            parsedDoc = await asyncParser(parsedDoc);
          }
          return parsedDoc;
        }));
        setData(collection);
        setLoading(false);
      },
      error => {
        //todo. Make an global error object, to handle specific errors
        console.error(`Error retrieving ${path}`, error);
        setLoading(false);
      },
    );
  }, [path, queryConstraints]);

  return {
    data,
    loading,
    setLoading,
  };
};
