import React,{ useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export interface AccordionProps{
  title:string
  content:string
}
const Accordion = (props:AccordionProps) => {
  const {title, content} = props
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div key={title}>
      <div>
        <button onClick={handleClick}>{title}</button>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Accordion;
