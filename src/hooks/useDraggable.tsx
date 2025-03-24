import { useEffect } from "react";
import { dragElement } from "../utils/makeDraggable";

export function useDraggable(header: any, root: any) {
    useEffect(() => {
        dragElement(header.current!, root.current!);
    }, []);
}
