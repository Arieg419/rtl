import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import WebIcon from "@material-ui/icons/WebRounded";
import MailIcon from "@material-ui/icons/Mail";
import PeopleIcon from "@material-ui/icons/PeopleRounded";
import BookIcon from "@material-ui/icons/LibraryBooksRounded";
import { loadCSS } from "fg-loadcss";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Container, Wrapper, Row, Column, Link, Title } from "./styles/footer";
import { Link as RouterLink } from "react-router-dom";

// @ts-ignore
export function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// @ts-ignore
Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

// @ts-ignore
Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

// @ts-ignore
Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

// @ts-ignore
Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

// @ts-ignore
Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > .fa": {
        margin: 10,
      },
    },
  })
);

export default function FooterContainer() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Mission</Footer.Title>
            {/* <Footer.Link href="#">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                className={classes.root}
              >
                <Icon className="fa fa-stethoscope" />
                <div>About</div>
              </div>
            </Footer.Link> */}
            <RouterLink to="/about" style={{ textDecoration: "none" }}>
              <Footer.Link href="#">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  className={classes.root}
                >
                  <PeopleIcon />{" "}
                  <div style={{ marginLeft: "10px" }}>About us</div>
                </div>
              </Footer.Link>
            </RouterLink>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Learn</Footer.Title>
            <RouterLink to="/learn" style={{ textDecoration: "none" }}>
              <Footer.Link href="#">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  className={classes.root}
                >
                  <BookIcon />
                  <div style={{ marginLeft: "10px" }}>Episodes</div>
                </div>
              </Footer.Link>
            </RouterLink>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact us</Footer.Title>
            <Footer.Link href="#">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                className={classes.root}
              >
                <MailIcon />{" "}
                <div style={{ marginLeft: "10px" }}>
                  <a
                    href="mailto:RUNTHELIST@GMAIL.COM"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {" "}
                    Mail
                  </a>
                </div>
              </div>
            </Footer.Link>
            <RouterLink to="/twitter" style={{ textDecoration: "none" }}>
              <Footer.Link href="#">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  className={classes.root}
                >
                  <TwitterIcon />{" "}
                  <div style={{ marginLeft: "10px" }}>Twitter</div>
                </div>
              </Footer.Link>
            </RouterLink>
            <Footer.Link
              target="_blank"
              href="https://runthelistpodcast.com"
              style={{ marginTop: 20 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                className={classes.root}
              >
                <WebIcon /> <div style={{ marginLeft: "10px" }}>Website</div>
              </div>
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
