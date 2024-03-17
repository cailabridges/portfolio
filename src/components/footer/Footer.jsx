import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Email, LinkedIn, GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  icon: {
    margin: "0 10px",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const email = "bridgescaila@gmail.com";

  return (
    <div className={classes.footer}>
      <a href={`mailto:${email}`} className={classes.icon}>
        <Email />
      </a>
      <a href="https://www.linkedin.com/in/caila-bridges-2557bb293/" target="_blank" rel="noreferrer" className={classes.icon}>
        <LinkedIn />
      </a>
      <a href="https://github.com/cailabridges" target="_blank" rel="noreferrer" className={classes.icon}>
        <GitHub />
      </a>
    </div>
  );
};

export default Footer;
