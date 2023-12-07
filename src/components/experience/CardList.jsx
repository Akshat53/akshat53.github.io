import React from "react";
import styles from "../component.module.css";

const CardList = (props) => {
  const { data } = props;
  return (
    <>
      <ul className={styles.cardList}>
        {data.map((item, i) => {
          return (
            <li>
              <div>
                <span>{item.icon}</span>
              </div>
              <div>
                <h3>{item.label}</h3>
                <p>{item.level}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CardList;
