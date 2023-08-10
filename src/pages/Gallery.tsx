import GalleryCards from "components/GalleryCards";
import HeaderImage from "components/HeaderImage";
import Navbar from "components/Navbar";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-start items-center w-screen overflow-hidden overflow-y-scroll"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <HeaderImage img="gallery"/>
        <div className=" ml-3 max-w-screen-2xl w-full h-fit p-5 flex gap-5">
          {/* COL 1 */}
          <div className=" w-full gap-5 flex flex-col justify-between">
            <GalleryCards
              img="custom1"
              height={300}
              title="Klaus"
              description="Klaus Dog namanya"
              chip={["Dog", "Paw", "Keychain", "Medium"]}
            />
            <GalleryCards
              img="custom2"
              height={280}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Cat", "Bracelet", "Small"]}
            />
            <GalleryCards
              img="custom6"
              height={460}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Miniature", "3D", "Big"]}
            />
            <GalleryCards
              img="custom7"
              height={280}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Keychain", "Small"]}
            />
            <GalleryCards
              img="custom21"
              height={450}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Starwars", "Yoda", "Earrings", "Character"]}
            />
            <GalleryCards
              img="custom26"
              height={330}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Miniature", "3D", "Big"]}
            />
          </div>

          {/* COL 2 */}
          <div className=" w-full gap-5 flex flex-col justify-between">
            <GalleryCards
              img="custom3"
              height={350}
              title="Dogi Naon Ieu"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Pendant", "Small"]}
            />
            <GalleryCards
              img="custom8"
              height={200}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog"]}
            />
            <GalleryCards
              img="custom9"
              height={350}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Stud"]}
            />
            <GalleryCards
              img="custom10"
              height={450}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Miniature", "3D", "Big"]}
            />
            <GalleryCards
              img="custom20"
              height={280}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Cat"]}
            />
            <GalleryCards
              img="custom22"
              height={470}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Bros", "Big"]}
            />
          </div>

          {/* COL 3 */}
          <div className=" w-full gap-5 flex flex-col justify-between">
            <GalleryCards
              img="custom27"
              height={450}
              title="Pom?"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Miniature", "3D", "Big"]}
            />
            <GalleryCards
              img="custom14"
              height={400}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Phone", "Hanger"]}
            />
            <GalleryCards
              img="custom15"
              height={480}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["People"]}
            />
            <GalleryCards
              img="custom16"
              height={200}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Bracelet"]}
            />
            <GalleryCards
              img="custom17"
              height={240}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Keychain"]}
            />
            <GalleryCards
              img="custom24"
              height={360}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["People", "Keychain"]}
            />
          </div>

          {/* COL 4 */}
          <div className=" w-full gap-5 flex flex-col justify-between">
            <GalleryCards
              img="custom5"
              height={370}
              title="Dog In the Shoes"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Shoes", "Keychain", "Nametag"]}
            />
            <GalleryCards
              img="custom11"
              height={200}
              title="Sexy Butt"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "3D"]}
            />
            <GalleryCards
              img="custom12"
              height={280}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Stud"]}
            />
            <GalleryCards
              img="custom13"
              height={200}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog"]}
            />
            <GalleryCards
              img="custom18"
              height={200}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Food", "Keychain", "3D"]}
            />
            <GalleryCards
              img="custom19"
              height={300}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Rabbit", "Bracelet"]}
            />
            <GalleryCards
              img="custom25"
              height={450}
              title="Cat Bracelet"
              description="lorem ipsumsda asdj asnfoabwofjabwo abwof baosifn aisnfiaonwifnoaisnfoi nas apsfn apsnf pan"
              chip={["Dog", "Keychain"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
