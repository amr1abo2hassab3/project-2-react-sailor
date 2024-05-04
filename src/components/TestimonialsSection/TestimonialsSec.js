import "./TestimonialsSec.css";

import testi1 from "../../media/testimonials-1.jpg";
import testi2 from "../../media/testimonials-2.jpg";
import testi3 from "../../media/testimonials-3.jpg";
import testi4 from "../../media/testimonials-4.jpg";
import testi5 from "../../media/testimonials-5.jpg";
import testi6 from "../../media/testimonials-6.jpg";

function SecTesti() {
  const dataPerson = [
    {
      img: testi1,
      name: "Saul Goodman",
      jop: "Ceo & Founder",
      descreption:
        " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      img: testi2,
      name: "Sara Wilsson",
      jop: "Designer",
      descreption:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      img: testi3,
      name: "Jena Karlis",
      jop: "Store Owner",
      descreption:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      img: testi4,
      name: "Matt Brandon",
      jop: "Freelancer",
      descreption:
        " Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      img: testi5,
      name: "John Larson",
      jop: "Entrepreneur",
      descreption:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. ",
    },
    {
      img: testi6,
      name: "Emily Harison",
      jop: "Store Owner",
      descreption:
        " Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur. Sequi officiis ea et quia quidem. ",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          {dataPerson.map((i) => (
            <div className="col-lg-6 col-md-12 col-md-12">
              <div className="all_Testi">
                <div className="person_testi">
                  <div className="img_person">
                    <img src={i.img} />
                  </div>
                  <div className="name_person">
                    <h1>{i.name}</h1>
                    <h4>{i.jop}</h4>
                  </div>
                </div>

                <div className="desc_testi">
                  <p>
                    <i class="fa-solid fa-quote-left"></i> {i.descreption}{" "}
                    <i class="fa-solid fa-quote-right"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecTesti;
