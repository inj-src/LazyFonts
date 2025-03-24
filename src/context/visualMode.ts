import { createGlobalState } from 'react-hooks-global-state';

import { storage } from '../utils/storage';

const initState = {visualMode: "light"}
const storedValue = await storage.get("visualMode") as typeof initState 


const { useGlobalState, subscribe } = createGlobalState(storedValue ?? initState);
const useVisualMode = () => useGlobalState('visualMode')

subscribe("visualMode", (value) => {
    storage.set("visualMode", value)
})

export { useVisualMode }

