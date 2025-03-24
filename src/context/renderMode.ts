import { createGlobalState } from "react-hooks-global-state";
const { useGlobalState } = createGlobalState({ key: "normal" });
const useRenderMode = () => useGlobalState("key");
export { useRenderMode };
