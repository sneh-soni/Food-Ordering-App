import { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleOnline = () => {
    setStatus(navigator.onLine);
  };

  const handleOffline = () => {
    setStatus(navigator.offLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
};

export default useOnline;
