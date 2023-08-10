import HeaderImage from "components/HeaderImage";
import Navbar from "components/Navbar";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Navbar/>
      <HeaderImage img="welcome"/>
    </>
  );
};

export default Home;
