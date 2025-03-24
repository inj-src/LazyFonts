import { useEffect } from "react";
import { CustomScrollBar } from "../../components/ui/customScrollBar.tsx";

export function FontsWrapper({ children, refer, ...rest }: type) {
    //setting a hardcoded height for the root div (of here) for overflow less scrolling

    const setHeight = () => {
        const div = refer.current! as HTMLDivElement;
        div.style.height = getComputedStyle(div).height;
    };
    // with useEffect setting the initial height value and also attaching a resize event on window
    useEffect(() => {
        setHeight();
        window.addEventListener("resize", setHeight);
    }, []);

    return (
        <CustomScrollBar refer={refer} {...rest}>
            {children}
        </CustomScrollBar>
    );
}

interface type
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    refer: React.MutableRefObject<null>;
}
