import {createGlobalState} from 'react-hooks-global-state';
import {sortTypeNames} from './fontsData';

const { useGlobalState } = createGlobalState({sortingMode: "alpha"} as {sortingMode: sortTypeNames});
const useSortingMode = () => useGlobalState("sortingMode");
export { useSortingMode }


