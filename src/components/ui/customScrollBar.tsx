import s from "./customScrollBar.module.scss";
export function CustomScrollBar({
    children,
    refer,
    className,
    onMouseMove,
    onMouseLeave,
    ...rest
}: type) {
    return (
        <div
            ref={refer}
            {...rest}
            className={`${className} ${s.container}`}
            onMouseMove={(e) => {
                if (onMouseMove) onMouseMove(e);
                let ele = e.currentTarget;
                const { right } = ele.getBoundingClientRect();
                right - e.clientX <= 8
                    ? ele.classList.add(s.addMoreWidth)
                    : ele.classList.remove(s.addMoreWidth);
            }}
            onMouseLeave={(e) => {
                if (onMouseLeave) onMouseLeave(e);
                e.currentTarget.classList.remove(s.addMoreWidth);
            }}
        >
            {children}
        </div>
    );
}

interface type
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    refer?: React.MutableRefObject<null>;
}
