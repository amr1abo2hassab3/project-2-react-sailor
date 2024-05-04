
import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import TeamAbout from "../components/teamAbout/TeamAbout";

const Team = () => {
    return (
      <div>
        <HeaderAbout linkPage = "/team" title = "team" />
        <TeamAbout />
      </div>
    );
}

export default Team ;