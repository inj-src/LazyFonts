import { createGlobalState } from "react-hooks-global-state";
import { storage } from "../utils/storage";
import { getFontsData } from "../data/fonts";

getFontsData("alpha");
export const storedFontsData = (await storage.get("fontsData"))
    .fontsData as fontsDataObjectType;

const { useGlobalState } = createGlobalState(storedFontsData);
export { useGlobalState as useFontsData };

export type sortTypeNames = "alpha" | "popularity" | "style" | "trending";

type fontsDataObjectType = {
    [key in sortTypeNames]: fontsType[];
};

export interface fontsType {
    family: string;
    variants: string[];
    subsets: string[];
    version: string;
    lastModified: string;
    files: { [a: string]: string };
    category: string;
    kind: string;
    menu: string;
}
