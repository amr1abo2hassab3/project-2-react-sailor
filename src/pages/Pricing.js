

import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import SecPricing from "../components/pricingSection/Pricingsec";
import FacPricing from "../components/FacPricing/FacPricing";

function Pricing() {
  return (
    <div>
      <HeaderAbout title="Pricing" linkPage="/pricing" />
      <SecPricing />
      <FacPricing />
    </div>
  );
}

export default Pricing;
