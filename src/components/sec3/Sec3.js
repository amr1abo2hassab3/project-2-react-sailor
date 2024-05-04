import "./sec3.css";
import client1 from "../../media/client-1.png";
import client2 from "../../media/client-2.png";
import client3 from "../../media/client-3.png";
import client4 from "../../media/client-4.png";
import client5 from "../../media/client-5.png";
import client6 from "../../media/client-6.png";
import { useState } from "react";

const Sec3 = () => {
  const imgs = [
    {
      img: client1,
      title: "this is image",
    },
    {
      img: client2,
      title: "this is image",
    },
    {
      img: client3,
      title: "this is image",
    },
    {
      img: client4,
      title: "this is image",
    },
    {
      img: client5,
      title: "this is image",
    },
    {
      img: client6,
      title: "this is image",
    },
  ];


  return (
    <div>
      <section className="sec3">
        <div className="container">
          <div className="all_sec3">
            <div className="row">
              {
                imgs.map((i) =>(
                  <div className="col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center">
                <img src={i.img} alt={i.title} />
              </div>
                ) )
              }
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default Sec3;
