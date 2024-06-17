import LandingSlider from "./LandingSlider";
import LandingNav from "./LandingNav";
import LandingPartners from "./LandingPartners";
import LandingAccess from "./LandingAccess";
import TraderFooter from "../layout/TraderFooter";

function WelcomInLink() {
  return (
    <>
      <LandingNav />
      <LandingSlider />
      <LandingPartners />
      <LandingAccess />
      <TraderFooter />
    </>
  );
}

export default WelcomInLink;
