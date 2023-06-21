import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState(
  {}
);

export { useGlobalState, setGlobalState, getGlobalState };

