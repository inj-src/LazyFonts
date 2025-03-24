import { useEffect } from "react";
import { usePaginatedFontsData } from "./hooks/paginatedFontsData";

export function FontsContainer() {
    const [data, load] = usePaginatedFontsData();
    // const [, setSortingMode] = useSortingMode();
    useEffect(() => {}, [data]);
    return (
        <div onClick={() => load()}>
            <p>
                {data.map((item) => {
                    return item.family;
                })}
            </p>
        </div>
    );
}
