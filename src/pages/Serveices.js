
import Sec4 from "../components/sec4/Sec4";
import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import FeaturesServ from "../components/servicesFeatures/ServFeaturs";

function Serveices() {
  return (
    <div>
      <HeaderAbout title="Services" linkPage="/serveices" />
      <Sec4 />
      <FeaturesServ />
    </div>
  );
}

export default Serveices;
