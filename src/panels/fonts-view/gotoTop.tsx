import s from "./fontsView.module.scss";
import { ArrowIcon } from "../../assets/ArrowIcon";
import { Icon } from "../../components/ui/icon";
import { useShowSearchBar } from "../../context/showSearchBar";

export function GotoTop({fontsWrapperRef, isInView}: {fontsWrapperRef: any, isInView: boolean}) {
    const [showSearchBar, setShowSearchBar] = useShowSearchBar();

    return (
        <div
            className={`${s.gotoTopContainer} ${
                !isInView ? showSearchBar && s.gotoBtnShow : null
            }`}
            onClick={() => {
                const div = fontsWrapperRef.current! as HTMLDivElement;
                div.scroll({ top: 0, behavior: "smooth" });
                setShowSearchBar(true);
            }}
        >
            <Icon>
                <ArrowIcon />
            </Icon>
        </div>
    );
}
