import React from "react";
import Card from "../cards/Card";
import Image1 from "../images/home.jpg";
function Home() {
  const data = [{ imagepath: Image1, pageName: "Home Page" }];

  const dataList = data.map((d) => (
    <Card
      img={d.imagepath}
      title={d.pageName}
      description=" This is Ajay Kuymar Reddy. Welcome to my small portfolio...."
    />
  ));
  return <div> {dataList} </div>;
}

export default Home;
