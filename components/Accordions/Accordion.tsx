import clsx from "clsx";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import styles from "./Accordion.module.scss";
export interface AccordionProps {
  title: string;
  content: string;
  onToggle: () => void
  active:boolean
}
const Accordion = (props: AccordionProps) => {
  const { title, content, onToggle,active } = props;
  const handleClick = () => {
    onToggle();
  };
  return (
    <div key={title} className={styles["accordion"]}>
      <div className={styles["accordion__action"]} onClick={handleClick}>
        {title}
        {active ? <FaMinus /> : <FaPlus />}
      </div>
      <div
        className={clsx(
          styles["accordion__content"],
          active && styles["accordion__content--active"]
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
