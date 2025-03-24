import s from "./header.module.scss";
import { LazyFontsLight } from "../../assets/LazyFontsLight.tsx";
import { SwitchToDarkModeIcon } from "../../assets/SwitchToDarkModeIcon";
import { FullScreenIcon } from "../../assets/FullScreenIcon";
import { MinimizeIcon } from "../../assets/MinimizeIcon.tsx";
import { CloseIcon } from "../../assets/CloseIcon.tsx";
import { LazyFontsDark } from "../../assets/LazyFontsDark.tsx";
import { SwitchToLightModeIcon } from "../../assets/SwitchToLightModeIcon.tsx";
import { LogoShapeIcon } from "../../assets/LogoShapeIcon.tsx";

import { Icon } from "../../components/ui/icon.tsx";

import { useVisualMode } from "../../context/visualMode";
import { useRenderMode } from "../../context/renderMode";
import { useFloatingValue } from "../../context/floatingIconValue.ts";

interface props {
    reference: React.MutableRefObject<null>;
}

export function Header({ reference }: props) {
    const [visualMode, setVisualMode] = useVisualMode();
    const [renderMode, setRenderMode] = useRenderMode();
    const [, setTopValue] = useFloatingValue();

    return (
        <>
            {renderMode == "normal" ? (
                <div className={`${s.container}`} ref={reference}>
                    <div className={`${s.logo}`}>
                        {visualMode == "light" ? (
                            <LazyFontsLight />
                        ) : (
                            <LazyFontsDark />
                        )}
                    </div>
                    <div className={`${s.icons}`}>
                        <div
                            className={`${s.icon} ${s.switchMode}`}
                            onClick={() => {
                                setVisualMode((current) => {
                                    return current == "light"
                                        ? "dark"
                                        : "light";
                                });
                            }}
                        >
                            <Icon>
                                {visualMode == "light" ? (
                                    <SwitchToDarkModeIcon />
                                ) : (
                                    <SwitchToLightModeIcon />
                                )}
                            </Icon>
                        </div>
                        <div className={`${s.navIcons}`}>
                            <div className={`${s.icon}`}>
                                <Icon type="yellow">
                                    <FullScreenIcon />
                                </Icon>
                            </div>
                            <div
                                className={`${s.icon}`}
                                onClick={() => {
                                    setRenderMode((current) =>
                                        current == "floating"
                                            ? "normal"
                                            : "floating"
                                    );
                                }}
                            >
                                <Icon type="blue">
                                    <MinimizeIcon />
                                </Icon>
                            </div>
                            <div className={`${s.icon}`}>
                                <Icon type="red">
                                    <CloseIcon />
                                </Icon>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={`${s.floating}`}
                    onDoubleClick={(e) => {
                        setTopValue(
                            e.currentTarget.getBoundingClientRect().top
                        );
                        setRenderMode((current) =>
                            current == "normal" ? "floating" : "normal"
                        );
                    }}
                >
                    <LogoShapeIcon />
                </div>
            )}
        </>
    );
}
