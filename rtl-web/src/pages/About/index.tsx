import React from "react";
import { Typography } from "@material-ui/core";
import Logo from "../../assets/logo512.png";
// import "./index.css";

export default function () {
  window.scrollTo(0, 0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        margin: 20,
      }}
    >
      <Typography variant="h6">About Us</Typography>
      <img style={{ margin: 20, height: 150, width: 150 }} src={Logo} />
      <Typography variant="subtitle2" style={{ fontSize: 24 }}>
        Welcome to Run the List!
      </Typography>
      <Typography variant="body1" paragraph>
        We are a medical education podcast designed for medical students and new
        residents, as well as any clinician hoping to brush up on common
        internal medicine topics. Run the List was created by{" "}
        <span style={{ fontWeight: "bold" }}>Dr. Walker Redd</span>, an internal
        medicine resident at Brigham and Women’s Hospital;{" "}
        <span style={{ fontWeight: "bold" }}>Emily Gutowski</span>, a medical
        student at Harvard Medical School who plans on going into internal
        medicine; and{" "}
        <span style={{ fontWeight: "bold" }}>Dr. Navin Kumar</span>, attending
        gastroenterologist at Brigham and Women’s Hospital.
      </Typography>
      <Typography paragraph>
        When we met, we all agreed that there was a need for a{" "}
        <span style={{ fontWeight: "bold" }}>
          succinct, high-yield resource
        </span>{" "}
        that covers the initial steps in clinical decision-making and management
        of common problems for which patients are admitted to the hospital.
        While there are multiple available resources that prepare students to
        ace exams, there are far fewer that focus on more practical advice for
        the wards.
      </Typography>

      <Typography paragraph>
        <span style={{ fontWeight: "bold" }}>We know that time is limited</span>{" "}
        for students and residents. Therefore, rather than a deeper dive into
        the details of the evidence for how we manage patients, here we aim for
        brevity knowing that there are other resources and opportunities to
        delve further into the literature. We try to review the current
        consensus in clinical practice and reinforce the most important
        takeaways for each topic.
      </Typography>
      <Typography paragraph>
        We use{" "}
        <span style={{ fontWeight: "bold" }}>case-based discussions</span> to
        cover some of the most common topics within each internal medicine
        specialty, and interview a clinical to ask how they think about each
        disease process. You can listen to our podcasts here on our website or
        through Apple Podcasts. If you enjoy our content, please remember to
        subscribe and rate us!
      </Typography>
      <Typography paragraph>
        <span style={{ fontWeight: "bold" }}>
          Importantly, the content discussed in this podcast is meant for
          informational and educational purposes only and should not be
          understood as medical advice.{" "}
        </span>{" "}
      </Typography>
      <Typography paragraph>
        Please reach out to us if you have any feedback or questions!
      </Typography>
      <Typography>
        Sincerely, The{" "}
        <span style={{ fontWeight: "bold" }}>Run the List Team</span>
      </Typography>
    </div>
  );
}
