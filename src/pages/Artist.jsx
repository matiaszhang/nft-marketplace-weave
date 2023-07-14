import { Typography, Tab, TabContent } from "components/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import AllNFTs from "components/artist/AllNFTs";
import Testimonials from "components/artist/Testimonials";
import ContactInformation from "components/artist/ContactInformation";
import Updates from "components/artist/Updates";
import Activities from "components/artist/Activities";

const Artist = () => {
  return (
    <div className="lg:container mx-auto pb-[100px]  overflow-hidden">
      <div className="relative flex justify-center mb-10">
        <img className="w-full min-w-[822px] min-h-[200px]" src="/images/Frame 627043.png" alt="banner" />
        <img
          className="absolute left-5 lg:left-16 laptop:left-[100px] -bottom-10 w-24 sm:w-32 lg:w-40 laptop:w-[200px] rounded-full border-8 lg:border-[20px] border-white"
          src="/images/Ellipse 8 (2).png"
          alt="hero"
        />
      </div>
      <div className="pt-5 px-5 lg:px-16 laptop:px-[100px] flex flex-col gap-10">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4">
            <Typography type="h2">McCoy</Typography>
            <div className="flex flex-col sm:flex-row gap-4 text-xl lg:text-2xl font-semibold text-white">
              <label>0xd932...DTED</label>
              <label>Joined January 2019</label>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-white">
            <FontAwesomeIcon className="cursor-pointer" icon={faShareNodes} size="lg" />
            <FontAwesomeIcon className="cursor-pointer" icon={faEllipsis} size="lg" />
          </div>
        </div>
        <Tab>
          <TabContent label="All NFTs" index={0}>
            <AllNFTs />
          </TabContent>
          <TabContent label="Activities" index={1}>
            <Activities />
          </TabContent>
          <TabContent label="Testimonials" index={2}>
            <Testimonials />
          </TabContent>
          <TabContent label="Contact Information" index={3}>
            <ContactInformation />
          </TabContent>
          <TabContent label="Updates" index={4}>
            <Updates />
          </TabContent>
        </Tab>
      </div>
    </div>
  );
};

export default Artist;
