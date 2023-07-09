import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { languages } from "../assets/languages/lang";
import { aboutDescripton, aboutTitle } from "../styles/sectionStyles";
import { ExpandMoreSharp } from "@mui/icons-material";

const About = () => {
  const userLanguage = navigator.userLanguage || navigator.language;

  const handleLanguage = (userLanguage) => {
    if (!Object.prototype.hasOwnProperty.call(languages, userLanguage)) {
      return languages["en"];
    }

    return languages[`${userLanguage}`];
  };

  const description = handleLanguage(userLanguage);

  return (
    <div>
      <h1 style={aboutTitle}>About us</h1>

      <Accordion
        sx={{ maxWidth: "600px", backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp sx={{ color: "white" }} />}
          aria-controls="OUR STORY-content"
          id="OUR STORY-header">
          <Typography>OUR STORY - FROM THE BEGINNING TO THE PRESENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            With experience in the protective clothing industry, our team have gained valuable expertise and
            collaborated with leading brands in the field.
            <br />
            <br />
            Our commitment to operational excellence and responsibility towards customers, employees, and
            partners has already earned recognition in Europe. At SMA, we believe in a better future and are
            dedicated to creating it through outstanding performance, unwavering integrity, complete trust.
            <br />
            <br />
            All our solutions are inspired by creative thinking, and our products are tailored to meet the
            needs of a rapidly evolving world. Trust us to provide you with optimal safety and comfort in the
            workplace.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ maxWidth: "600px", backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp sx={{ color: "white" }} />}
          aria-controls="OUR STORY-content"
          id="OUR STORY-header">
          <Typography>OUR MISSION - WHAT'S OUR MAIN GOAL PURPOSE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At SMA, our main mission is to provide our customers with high-quality protective clothing that
            combines excellent protection, comfort, and style. Our primary goal is to protect and support our
            customers in their daily tasks, ensuring not only their safety but also confidence and the ability
            to express their individuality through fashion.
            <br />
            <br />
            Our main goal is to satisfy our customers by offering them high-quality protective clothing that
            meets their needs and expectations. We are ready to face any challenge and continuously strive to
            improve our products to provide our customers with complete trust and satisfaction.
            <br />
            <br />
            Our mission is not just about selling protective clothing - it's about creating a safe and stylish
            future for our customers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{ maxWidth: "600px", backgroundColor: "transparent", color: "white", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreSharp sx={{ color: "white" }} />}
          aria-controls="OUR STORY-content"
          id="OUR STORY-header">
          <Typography>OUR VISION - WHERE DO WE SEE OURSELVES IN THE FUTURE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At SMA, our vision is to become a leading provider of protective clothing, setting new trends and
            standards in the industry. We see ourselves not only as sellers but also as innovators who
            continuously develop and deliver products with the latest technologies and the best solutions for
            our customers.
            <br />
            <br />
            We aim to be recognized as a brand that embodies quality, reliability, and style in the field of
            protective clothing. Our goal is for our clothing to not only meet safety requirements but also be
            perceived as a reflection of personality and individuality.
            <br />
            <br />
            We believe that our vision will contribute to positive changes in the protective clothing
            industry, and we will pursue its realization with determination and commitment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <p style={aboutDescripton}>{description}</p> */}
    </div>
  );
};

export default About;
