import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default USer",
});

export default UserContext;
