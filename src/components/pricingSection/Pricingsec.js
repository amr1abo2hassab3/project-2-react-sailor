import { Link } from "react-router-dom";
import "./pricingsec.css" ;


const SecPricing = () => {
    return (
      <section class="pricing">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="all_pricing">
                <h3>Free</h3>
                <h4>
                  <sup>$</sup>0 <span>/ month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li class="solid_center">Pharetra massa</li>
                  <li class="solid_center">Massa ultricies mi</li>
                </ul>
                <div class="btn_pricing">
                  <Link to="#" class="btn_buy">
                    buy now
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="all_pricing">
                <h3 class="Business">Business</h3>
                <h4>
                  <sup>$</sup>19 <span>/ month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li class="">Pharetra massa</li>
                  <li class="solid_center">Massa ultricies mi</li>
                </ul>
                <div class="btn_pricing">
                  <Link to="#" class="btn_buy">
                    buy now
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="all_pricing">
                <h3>Developer</h3>
                <h4>
                  <sup>$</sup>29 <span>/ month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li class="solid_center">Pharetra massa</li>
                  <li class="solid_center">Massa ultricies mi</li>
                </ul>
                <div class="btn_pricing">
                  <Link to="#" class="btn_buy">
                    buy now
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 mt-4">
              <div class="all_pricing">
                <span class="Advanced">Advanced</span>
                <h3>Ultimate</h3>
                <h4>
                  <sup>$</sup>49<span>/ month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li class="">Pharetra massa</li>
                  <li class="">Massa ultricies mi</li>
                </ul>
                <div class="btn_pricing">
                  <Link to="#" class="btn_buy">
                    buy now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}


export  default SecPricing ;