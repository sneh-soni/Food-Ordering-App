import Context from "../utils/Context";
import { useContext } from "react";

const About = () => {
  const { data, setText } = useContext(Context);

  return (
    <div className="text-4xl p-4 m-4">
      <h1 className="my-3">This is About Page</h1>
      <input
        className="border border-black p-2 my-3 bg-gray-200"
        onChange={(e) => setText(e.target.value)}
        placeholder="Default Text"
      />
      <h1 className="my-3">{data}</h1>
    </div>
  );
};
export default About;
