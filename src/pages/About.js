
import HeaderAbout from "../components/headerAboutPage/HeaderAbout";
import Sec2About from "../components/Sec2About/Sec2About";
import TeamAbout from "../components/teamAbout/TeamAbout";
import Skills from "../components/skillsAbout/SkillsAbout";

function About(){
    return (
      <div>
        <HeaderAbout title="About" linkPage = "/about" />
        <Sec2About />
        <TeamAbout />
        <Skills />
      </div>
    );
}

export default About