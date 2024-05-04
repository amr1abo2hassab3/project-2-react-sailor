import { Link } from "react-router-dom";
import "./headerAbout.css"


const HeaderAbout = (props) => {
    return (
      <section className="header_page_top">
        <div className="container">
          <div className="all_text_header_page">
            <div className="header_page">
              <h1>{props.title}</h1>
            </div>
            <div className="link_page_hedaer">
              <ul>
                <li>
                  <Link to="/" target="_blank" className="link_home">
                    home
                  </Link>
                </li>
                <li className="my_page">
                  <Link to = {props.linkPage} >{props.title}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeaderAbout ;