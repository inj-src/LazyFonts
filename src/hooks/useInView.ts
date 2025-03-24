import { useInView as useFramerInView } from "framer-motion";
import { useRef } from "react";

interface type  {
    root?:  React.MutableRefObject<null>,
    margin?: string
} 

export function useInView (option?: type){
    const ref = useRef(null);
    const res = useFramerInView(ref, option);
    return [ref, res] as [typeof ref, typeof res]
}