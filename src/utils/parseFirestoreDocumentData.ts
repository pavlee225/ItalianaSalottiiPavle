import {DocumentSnapshot, Timestamp } from "firebase/firestore";

export function parseFirestoreDocumentData<T>(data: DocumentSnapshot | any): T & {id: string} {
    const documentData = {id: data.id, ...data.data()} as unknown as T;
    const iterate = (obj: any) => {
        Object.keys(obj).forEach(key => {
            if (obj[key] instanceof Timestamp || typeof obj[key]?.toDate === 'function') {
                obj[key] = obj[key].toDate();
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                iterate(obj[key]);
            }
        });
    };

    iterate(documentData);

    return documentData as T & {id: string};
}
