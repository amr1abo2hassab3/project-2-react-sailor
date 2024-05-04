
import "./fromContact.css"

const FormContact = () => {
  return (
    <section className="form_contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="all_media_form">
              <div className="media_form">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="text_media_form">
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022 </p>
              </div>
            </div>

            <div className="all_media_form">
              <div className="media_form">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="text_media_form">
                <h4>Email:</h4>
                <p>info@example.com </p>
              </div>
            </div>

            <div className="all_media_form">
              <div className="media_form">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div className="text_media_form">
                <h4>Call:</h4>
                <p>+1 5589 55488 55s </p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                <input
                  type="text"
                  className="input_text"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 mb-4">
                <input
                  type="text"
                  className="input_text"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                <input
                  type="text"
                  className="input_text"
                  placeholder="Subject"
                />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                <textarea
                  name=""
                  id=""
                  rows="5"
                  className="text_area"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
                <button className="btn_main btn_form_contact">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContact ;
