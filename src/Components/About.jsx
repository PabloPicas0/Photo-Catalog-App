import { languages } from "../assets/languages/lang";
import { aboutDescripton, aboutTitle } from "../styles/sectionStyles";

const About = () => {
  const userLanguage = navigator.userLanguage || navigator.language;

  const handleLanguage = (userLanguage) => {
    if (!Object.prototype.hasOwnProperty.call(languages, userLanguage)) {
      return languages["en"];
    }

    return languages[`${userLanguage}`]
  };

  const description = handleLanguage(userLanguage)

  return (
    <>
      <h1
        style={aboutTitle}>
        About us
      </h1>

      <p style={aboutDescripton}>
        {description}
      </p>
    </>
  );
};

export default About;
