import React from "react";
import styles from "../components/component.module.css";
import { ScheduleOutlined } from "@ant-design/icons";

const Card = (props) => {
  const { icon, prof, stats, desg } = props;
  return (
    <div className={styles.Card}>
      <p>{icon}</p>
      <h4>{prof}</h4>
      <p>{stats}</p>
      <p>{desg}</p>
    </div>
  );
};

export default Card;
