import { createContext, useReducer } from "react";
import reducer from "../../reducer";
import initialState from "../../initialState";

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext}