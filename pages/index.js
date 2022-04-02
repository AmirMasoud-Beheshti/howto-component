import Head from "next/head";
import styles from "../styles/Home.module.css";
import { accordionsItem } from "@/assets";
import { Accordions } from "@/components";
export default function Home() {
  return (
    <div className={styles.container}>
      <Accordions items={accordionsItem}></Accordions>
    </div>
  );
}
