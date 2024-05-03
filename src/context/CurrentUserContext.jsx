/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";

const CurrentUserContext = createContext();

function CurrentUserProvider({ children }) {
  const { currentUser, isLoading: isCurrentUserLoading } = useCurrentUser();

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isCurrentUserLoading,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

const useCurrentUserContext = () => {
  const context = useContext(CurrentUserContext);
  if (!context) throw new Error("Calling useDarkMode Outside QuizProvider");
  return context;
};

export { CurrentUserProvider, useCurrentUserContext };
