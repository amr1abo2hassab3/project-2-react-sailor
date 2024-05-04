import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import SecTesti from "../components/TestimonialsSection/TestimonialsSec";

const Testimonials = () => {
  return (
    <div>
      <HeaderAbout linkPage="/testimonials" title="Testimonials" />
      <SecTesti />
    </div>
  );
};

export default Testimonials;
