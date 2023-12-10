import React from "react";
import { Button, Card, Divider } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import styles from "../component.module.css";
const { Meta } = Card;
const ProjectCard = (props) => {
  const { img, title, description,href,link ,label} = props;
  return (
    <div>
      <Card
        style={{
          width: "100%",
          textAlign: "center",
          height:"500px"
        }}
        cover={
          <img
            alt="example"
            src={img}
          />
        }
      >
        <Meta title={title} description={description}/>
        <Divider />
        <div className={styles.projectCard}>
          <a href={href}>
            <GithubOutlined />
          </a>
         <a href={link} ><Button>{label}</Button></a>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
