import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import PeopleIcon from "@material-ui/icons/PeopleRounded";
import BookIcon from "@material-ui/icons/LibraryBooksRounded";
import { loadCSS } from "fg-loadcss";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Container, Wrapper, Row, Column, Link, Title } from "./styles/footer";

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
            <Footer.Title>Who we are</Footer.Title>
            <Footer.Link href="#">
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
            </Footer.Link>
            <Footer.Link href="#">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                className={classes.root}
              >
                <PeopleIcon /> <div style={{ marginLeft: "10px" }}>Team</div>
              </div>
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Learn</Footer.Title>
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
                <MailIcon /> <div style={{ marginLeft: "10px" }}>Mail</div>
              </div>
            </Footer.Link>
            <Footer.Link href="https://twitter.com/runthelistpod?ref_src=twsrc%5Etfw">
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
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
