import { createGlobalState } from 'react-hooks-global-state';
const { useGlobalState } = createGlobalState({key: true});
const useShowSearchBar = () => useGlobalState("key") 

export { useShowSearchBar }