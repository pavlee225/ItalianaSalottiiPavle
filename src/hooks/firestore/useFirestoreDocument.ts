import React, {useEffect, useState} from 'react';
import {doc, onSnapshot} from 'firebase/firestore';
import { firestore } from '../../firebaseConfig';
import { parseFirestoreDocumentData } from '../../utils/parseFirestoreDocumentData';

interface DataI<T> {
  data: T | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<T | null>>
}

interface OptionsI<T> {
  parser?: (data: T) => T;
  asyncParser?: (data: T) => Promise<T>;
}

export const useFirestoreDocument = <T>(path: string, docId: string | null, options: OptionsI<T & { id: string }> = {}): DataI<T> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const {parser, asyncParser} = options;
  useEffect(() => {
    if (docId) {
      setLoading(true);
      return onSnapshot(
        doc(firestore, path, docId),
        async (doc) => {
          if (doc.exists()) {
            let data = parseFirestoreDocumentData<T>(doc);
            if (parser) {
              data = parser(data);
            }
            if (asyncParser) {
              data = await asyncParser(data);
            }
            setData(data);
          } else {
            setData(null);
          }
          setLoading(false);
        },
        error => {
          //todo. Improve error handling
          console.error(`Error retrieving ${path}/${docId}`, error);
          setLoading(false);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docId, path]);
  return {data, loading, setLoading, setData};
};
