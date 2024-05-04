import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import Map from "../components/mapContact/Map";
import FormContact from "../components/formContact/FormContact";

function Contact() {
  return (
    <div>
      <HeaderAbout title="Contact" linkPage="/contact" />
      <Map />
      <FormContact />
    </div>
  );
}

export default Contact;
