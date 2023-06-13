import { languages } from "../assets/languages/lang";

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
        style={{
          fontSize: "2.375rem",
          textTransform: "uppercase",
          fontWeight: 700,
          marginTop: "20px",
          marginBottom: "10px",
        }}>
        About us
      </h1>

      <p style={{ textAlign: "center", maxWidth: "300px", fontSize: "1.1rem", margin: 0 }}>
        {description}
      </p>
    </>
  );
};

export default About;
