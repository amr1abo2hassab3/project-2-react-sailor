import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./pagTop.css";

function PageTop() {
  useEffect(() => {
    const page_top = document.getElementById("page_top");

    const handleScroll = () => {
      if (window.scrollY > 400) {
        page_top.style.display = "flex";
      } else {
        page_top.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Passing an empty array as the dependency to run this effect only once

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Link className="page_top" id="page_top" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </Link>
    </div>
  );
}

export default PageTop;
