import { createGlobalState } from 'react-hooks-global-state';
const { useGlobalState } = createGlobalState({key: 50});
    const   useFloatingValue = () => useGlobalState("key")

export {   useFloatingValue }