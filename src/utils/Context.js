import { createContext } from "react";

const Context = createContext({
  data: "Default Text",
});

Context.displayName = "First Context";

export default Context;
