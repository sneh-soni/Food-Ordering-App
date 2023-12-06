import Context from "../utils/Context";
import { useContext } from "react";

const Footer = () => {
  const { data } = useContext(Context);
  return (
    <div className="flex justify-between px-4 my-10">
      <p className="text-lg font-semibold">Copyrights</p>
      <p>{data}</p>
      <p>This is Footer</p>
    </div>
  );
};

export default Footer;
