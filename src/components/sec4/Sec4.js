import "./sec4.css";

const Sec4 = () => {
  const icons = [
    {
      icon: "fa-solid fa-briefcase",
      title: "Lorem Ipsum",
      description:
        " Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      icon: "fa-regular fa-rectangle-list",
      title: "Dolor Sitema",
      description:
        " Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
      icon: "fa-solid fa-chart-simple",
      title: "Sed ut perspiciatis",
      description:
        " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      icon: "fa-solid fa-binoculars",
      title: "Nemo Enim",
      description:
        " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      icon: "fa-regular fa-sun",
      title: "Magni Dolore",
      description:
        " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
      icon: "fa-solid fa-calendar-week",
      title: "Eiusmod Tempor",
      description:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    },
  ];

  return (
    <section className="sec4">
      <div className="container">
        <div className="row">
          {icons.map((i) => (
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="all_sec4 ">
                <div className="icon_box_sec4">
                  <i className={i.icon}></i>
                </div>
                <div className="text_sec4 ">
                  <h4>{i.title}</h4>
                  <p className="mb-0">
                   {i.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec4;
