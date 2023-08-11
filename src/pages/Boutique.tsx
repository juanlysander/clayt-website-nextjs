import BoutiqueCards from "components/BoutiqueCards";
import Footer from "components/Footer";
import HeaderImage from "components/HeaderImage";
import Navbar from "components/Navbar";

export default function Boutique() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-start items-center w-screen overflow-hidden overflow-y-scroll"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <HeaderImage img="boutique" />
        <div className=" max-w-screen-2xl w-full">
          <div className="w-full p-5 flex flex-col justify-center items-center">
            <BoutiqueCards/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
