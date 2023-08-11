import ContactForm from "components/ContactForm";
import Footer from "components/Footer";
import HeaderImage from "components/HeaderImage";
import Navbar from "components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-start items-center w-screen overflow-hidden overflow-y-scroll"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <HeaderImage img="contact" />
        <div className=" max-w-screen-2xl w-full">
          <div
            className="w-full p-5 flex justify-center items-center"
            style={{ height: "calc(100vh - 64px)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{delay: 0.6, duration: 0.6}}
              className=" w-max flex justify-center items-start gap-32 h-max"
            >
              <div>
                <h2 className=" textColor text-4xl tracking-wider mb-4 ">
                  Hi Clayteens!
                </h2>
                <p className=" textColor w-80 tracking-wide mb-4">
                  Lets get in touch!
                </p>
                <p className=" textColor w-80 tracking-wide mb-24">
                  We'd love to hear from you! If you have any questions or want
                  to make your own customized stuff, feel free to reach out. Our
                  team is here and ready to help!
                </p>
                <p className=" textColor w-80 tracking-wide mb-2">Warm love,</p>
                <p className=" textColor w-80 tracking-wide mb-4">Filene</p>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
