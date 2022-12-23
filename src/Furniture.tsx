import { flow, set } from "lodash/fp";

interface Furniture {
  name: string;
  images: (string | File)[];
  type: FurnitureType;
}

export interface SofaFurniture extends Furniture {
  type: FurnitureType.SOFA;
  schemaImage: string;
  collection: string;
}

export enum FurnitureType {
  BED = "BED",
  TABLE = "TABLE",
  SOFA = "SOFA",
}

export const getFurnitureDefaultItem = (
  type: FurnitureType
): Furniture | SofaFurniture => {
  const defaultData = { name: "", images: [], type };
  switch (type) {
    case FurnitureType.SOFA:
      return flow(
        set("schemaImage", ""),
        set("collection", "")
      )(defaultData) as SofaFurniture;
    case FurnitureType.BED:
    case FurnitureType.TABLE:
    default:
      return defaultData as Furniture;
  }
};

export default Furniture;
