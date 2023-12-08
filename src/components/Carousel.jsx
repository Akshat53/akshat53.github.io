import React from "react";
import { Carousel } from "antd";


const AppCarousel = (props) => {
  const { children } = props;

  return (
    <>
      <Carousel dotPosition={"top"}>{children}</Carousel>
    </>
  );
};
export default AppCarousel;
