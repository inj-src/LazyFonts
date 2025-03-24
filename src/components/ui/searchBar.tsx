import s from "./searchBar.module.scss";
import { Icon } from "./icon";
import SearchIcon from "../../assets/SearchIcon";
import { ResetIcon } from "../../assets/ResetIcon";
import { useEffect, useState } from "react";

export function SearchBar({ value }: { value: (a: string) => void }) {
    const [input, setInput] = useState("");
    useEffect(() => {
        value(input);
    }, [input]);
    return (
        <div className={`${s.container}`}>
            <div className={`${s.icon}`}>
                <SearchIcon />
            </div>
            <input
                type="text"
                placeholder="Search"
                value={input}
                onChange={(e) => {
                    setInput(e.currentTarget.value);
                }}
                onClick={(e) => {
                    e.currentTarget.select();
                }}
            />
            <div className={`${s.icon}`} onClick={() => setInput("")}>
                <Icon>
                    <ResetIcon />
                </Icon>
            </div>
        </div>
    );
}
