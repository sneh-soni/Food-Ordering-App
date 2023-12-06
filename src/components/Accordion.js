import { useState } from "react";

const Section = ({ name, description, isVisible, setIsVisible }) => {
  return (
    <div className="m-2 p-2 border border-black">
      <h1 className="text-2xl font-semibold">{name}</h1>
      {isVisible ? (
        <div>
          <button
            className="text-lg underline"
            onClick={() => {
              setIsVisible(false);
            }}
          >
            Hide
          </button>
          <p>{description}</p>
        </div>
      ) : (
        <button
          className="text-lg underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
    </div>
  );
};

const Accordion = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum id tortor non dapibus. Nunc vel tempus dui, quis faucibus dolor. Maecenas ullamcorper felis sed nisi molestie, quis lacinia metus feugiat. Proin eget purus ut mauris bibendum fermentum. Etiam eget nisl sed quam interdum placerat. Sed augue risus, porttitor sit amet tempor sed, ornare ut justo. Etiam eget lorem nec elit egestas aliquet eget a augue. Donec malesuada finibus egestas. In aliquet fermentum rutrum. Ut pretium diam urna, et iaculis sem consequat nec. Etiam scelerisque posuere purus eget pellentesque Morbi est neque, ultrices sit amet volutpat id, commodo id ante. Donec dapibus dui nisl, vel pharetra velit ornare sed. Morbi gravida dapibus dui vitae pellentesque. Aenean eu eros sapien. Duis vulputate justo eu vulputate tincidunt. ";

  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <Section
        name="Section_01"
        description={description}
        isVisible={visibleSection == "Section_01"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("Section_01") : setVisibleSection("");
        }}
      />
      <Section
        name="Section_02"
        description={description}
        isVisible={visibleSection == "Section_02"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("Section_02") : setVisibleSection("");
        }}
      />
      <Section
        name="Section_03"
        description={description}
        isVisible={visibleSection == "Section_03"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("Section_03") : setVisibleSection("");
        }}
      />
      <Section
        name="Section_04"
        description={description}
        isVisible={visibleSection == "Section_04"}
        setIsVisible={(isVisible) => {
          isVisible ? setVisibleSection("Section_04") : setVisibleSection("");
        }}
      />
    </div>
  );
};
export default Accordion;
