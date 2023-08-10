import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return (state = true);
      break;
    case "HIDE":
      return (state = false);
    default:
      return state;
      break;
  }
};

const toggleContext = createContext();

const ToggleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, false);
  return (
    <toggleContext.Provider value={{ state, dispatch }}>
      {children}
    </toggleContext.Provider>
  );
};

export { toggleContext, ToggleContextProvider };
