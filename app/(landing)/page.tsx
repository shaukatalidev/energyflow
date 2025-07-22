import LogoComponent from "@/app/_components/logocomponents/LogoComponent";
import AboutHomePage from "../_components/about/AboutHomePage";

import WhatsAppLink from "@/components/WhatsappIcon";
import Testimonials from "../_components/testimonials/Testimonials";
import Collaborators from "../_components/collaborators/Collaborators";

import QueryIcon from "@/components/QueryIcon";
import Branding from "../_components/branding/Branding";
import About2 from "../_components/about/About2";
import WhyEnerzyflow2 from "../_components/whyenergzyflow/WhyEnerzyflow2";
import OurCollaborators2 from "../_components/collaborators/OurCollaborators2";
import SocialLinks from "../_components/SocialMedia/SocialLinks";
import Footer2 from "../_components/footer/Footer2";
import Testimonials2 from "../_components/testimonials/Testimonials2";

const Home = () => {
  return (
    <>
      <LogoComponent />
      {/* <Categories /> */}
      <Branding />
      <About2 />
      <WhatsAppLink />
      <QueryIcon />
      <WhyEnerzyflow2 />
      {/* <Collab/> */}
      <OurCollaborators2 />
      <Testimonials2 />
      <SocialLinks />
      <Footer2 />
    </>
  );
};
export default Home;
