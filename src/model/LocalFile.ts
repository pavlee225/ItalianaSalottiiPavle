interface LocalFile {
  file: File;
  path: string;
}

export type LocalOrStorageFile = LocalFile;


export const isLocalFile = (obj?: any): obj is LocalFile =>
  obj && obj.hasOwnProperty('file') && obj.file instanceof File;


export default LocalFile;
