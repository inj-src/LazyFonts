import s from "./App.module.scss";
import { useRef } from "react";
import { Header } from "./panels/header/Header";
import { useDraggable } from "./hooks/useDraggable";
import { useVisualMode } from "./context/visualMode";
import { useRenderMode } from "./context/renderMode";
import { motion } from "framer-motion";
import { FontsView } from "./panels/fonts-view/fontsView";
import { useFloatingValue } from "./context/floatingIconValue";

function App() {
    //code for making the root draggable
    const header = useRef(null);
    const root = useRef(null);
    useDraggable(header, root);

    //code for switching between light and dark mode
    const [visualMode] = useVisualMode();

    //code for switching between round and square mode
    const [renderMode] = useRenderMode();

    const [topValue] = useFloatingValue();

    return (
        <motion.div
            layout
            id="root"
            className={`
                ${s.root} ${s[renderMode]}
                ${visualMode == "dark" ? "dark-mode" : null}
            `}
            style={{
                top: renderMode == "normal" ? "2vh" : topValue + "px",
            }}
            ref={root}
        >
            <Header reference={header} />
            <main className={`${s[renderMode]}`}>
                <FontsView />
            </main>
        </motion.div>
    );
}

export default App;
