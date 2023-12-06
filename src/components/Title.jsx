import React from "react";
import styles from "../components/component.module.css";


const Title = (props) => {
  const { title,label } = props;
  return (
    <div className={styles.title}>
        <p>{label}</p>
      <h1 >{title}</h1>

    </div>
    
  );
};

export default Title;
