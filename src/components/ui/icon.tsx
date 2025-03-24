import s from "./icon.module.scss";
import { ReactNode } from "react";

export const Icon = ({
    children,
    type,
    active,
}: {
    children: ReactNode;
    type?: string;
    active?: string;
}) => (
    <div className={`${s.container} ${s[type!]} ${s[active!]}`}>{children}</div>
);
