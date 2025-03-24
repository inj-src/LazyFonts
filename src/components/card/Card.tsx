import { ReactNode } from "react";
import s from "./card.module.scss";
interface props {
    state?: string;
    children: ReactNode;
}

export const Card = ({ children, state }: props) => (
    <div className={`${s.container} ${s[state!]}`}>{children}</div>
);
