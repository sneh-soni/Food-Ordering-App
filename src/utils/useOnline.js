// Find Online / Offline

import { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setStatus] = useState(true);

  const handleOnline = () => {
    console.log("online");
    setStatus(true);
    console.log(status);
  };

  const handleOffline = () => {
    console.log("Offline");
    setStatus(false);
    console.log(status);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // return () => {
    //   console.log("Removing event listeners");
    //   window.removeEventListener("online", handleOnline);
    //   window.removeEventListener("offline", handleOffline);
    // };
  }, []);
  return status;
};
export default useOnline;
