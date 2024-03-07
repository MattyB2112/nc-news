import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signedInUser, setSignedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  const login = (userData) => {
    setSignedInUser(userData);
  };

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser, login }}>
      {children}
    </UserContext.Provider>
  );
}
