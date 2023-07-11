import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

const ContactCard = (props) => {
  const { title, subtitle, description, icon } = props;

  return (
    <Card
      className="contact-card"
      sx={{
        width: { xs: "300px", sm: "345px" },
        height: "250px",
        overflow: "visible",
        borderRadius: "20px",
        border: "1px solid #daa520",
      }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          sx={{
            width: "80px",
            height: "80px",
            transform: "translate(0px, -35px)",
            border: "1px solid #daa520",
            backgroundImage: "linear-gradient(320deg, #f1c50e, #ff5b16)",
          }}
          aria-label={title}>
          {icon}
        </Avatar>
      </Box>

      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          textTransform={"uppercase"}
          fontSize={"1.375rem"}
          lineHeight={1.1}
          fontWeight={400}
          fontFamily={"Montserrat"}>
          {title}
        </Typography>
        <Typography fontFamily={"Open Sans"} marginY={"12px"}>
          {subtitle}
        </Typography>
        {description}
      </CardContent>
    </Card>
  );
};

export default ContactCard;
