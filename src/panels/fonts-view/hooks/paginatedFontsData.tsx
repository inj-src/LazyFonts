import { useState } from "react";
import { useFontsData } from "../../../context/fontsData";
import { useSortingMode } from "../../../context/sortingMode";

export function usePaginatedFontsData(interval: number = 20) {
    const [sortingMode] = useSortingMode();
    const [fontsData] = useFontsData(sortingMode);

    const [fontsInterval, setFontsInterval] = useState(interval);
    function loadData() {
        setFontsInterval((c) => c + interval);
    }

    const returnFontsData = fontsData.slice(0, fontsInterval);
    return [returnFontsData, loadData] as [
        typeof returnFontsData,
        typeof loadData
    ];
}
