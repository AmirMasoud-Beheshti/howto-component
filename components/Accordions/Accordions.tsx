import { AccordionsItem } from "@/constant";
import React, { useState } from "react";

import Accordion from "./Accordion";
export interface AccordionsProps {
  items: AccordionsItem[];
}
const Accordions = (props: AccordionsProps) => {
  const { items } = props;
  const [clicked, setClicked] = useState<number | null>(null);
  const handleToggle = (index) => {
    if (clicked === index) return setClicked(null);
    setClicked(index);
  };

  const renderdAccordions = items.map((item, index) => {
    return (
      <Accordion
        key={item.title}
        title={item.title}
        content={item.content}
        onToggle={() => handleToggle(index)}
        active={clicked === index}
      />
    );
  });
  return <>{renderdAccordions}</>;
};

export default Accordions;
