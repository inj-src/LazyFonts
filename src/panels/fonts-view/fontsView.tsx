import s from "./fontsView.module.scss";
import { SearchBar } from "../../components/ui/searchBar.tsx";
import { ActionButtons } from "./actionButtons";
import { FontsContainer } from "./fontsContainer";
import { useInView } from "framer-motion";
import { useShowSearchBar } from "../../context/showSearchBar.ts";
import { FontsWrapper } from "./fontsWrapper";
import { useRef } from "react";
import { GotoTop } from "././gotoTop.tsx";

export function FontsView() {
    const [showSearchBar, setShowSearchBar] = useShowSearchBar();
    const fontsWrapperRef = useRef(null);
    const fontsCountRef = useRef(null);
    const isInView = useInView(fontsCountRef, { root: fontsWrapperRef });

    return (
        <div className={`${s.container}`}>
            <div className={`${s.search} ${showSearchBar && s.show}`}>
                <div>
                    <SearchBar value={() => {}} />
                </div>
            </div>
            <ActionButtons />
            <FontsWrapper
                refer={fontsWrapperRef}
                className={`${s.FontsWrapper}`}
                onWheel={(e) => {
                    if (!isInView) setShowSearchBar(e.deltaY < 0);
                }}
            >
                <div ref={fontsCountRef} className={`${s.fontsCountRef}`}>
                    <span>1445 of 1455 families</span>
                </div>
                <FontsContainer />
            </FontsWrapper>
            <GotoTop {...{ fontsWrapperRef, isInView }} />
        </div>
    );
}
