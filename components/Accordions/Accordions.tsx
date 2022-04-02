import { AccordionsItem } from "@/constant";
import React, { useState } from "react";

import Accordion from "./Accordion";
export interface AccordionsProps {
  items: AccordionsItem[];
}
const Accordions = (props: AccordionsProps) => {
  const { items } = props;
  const [isOpen, setIsOpen] = useState(false);
 

  const renderdAccordions = items.map((item) => {
    return (
      <Accordion
        key={item.title}
        title={item.title}
        content={item.content}

      />
    );
  });
  return <div>{renderdAccordions}</div>;
};

export default Accordions;
