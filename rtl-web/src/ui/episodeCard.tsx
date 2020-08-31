import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

interface Props {
  imgUri: string;
  title: string;
  description: string;
  releaseDate: string;
  handout?: string | null | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginBottom: 20,
      fontFamily: "Poppins",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    header: {
      fontFamily: "Poppins",
    },
  })
);

const StyledHeader = styled(CardHeader)`
  font-family: "Poppins !important";
`;

export default function EpisodeCard(props: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getLastItem = (thePath: string) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);

  return (
    <Card className={classes.root}>
      <StyledHeader
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={props.title}
        subheader={props.releaseDate}
        className={classes.header}
      />
      <CardMedia
        className={classes.media}
        image={props.imgUri}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {!expanded
            ? props.description.length > 200
              ? props.description.substring(0, 200) + " ..."
              : props.description
            : null}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {navigator.share ? (
          <IconButton
            aria-label="share"
            onClick={() => {
              console.log("share btn clicked...");
              navigator
                .share({
                  title: "Run the List",
                  text: "Bridging the gap between theory and real stuff",
                  url: "https://https://www.runthelistpodcast.com",
                })
                .then(() => console.log("Successful share"))
                .catch((error) => console.log("Error sharing", error));
            }}
          >
            <ShareIcon />
          </IconButton>
        ) : null}
        {props.handout ? (
          <Button
            variant="contained"
            style={{ backgroundColor: "#1EA1F2", color: "#fff" }}
            href="#contained-buttons"
          >
            <Link
              href={props.handout}
              target="_blank"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Typography>View Handout</Typography>
            </Link>
          </Button>
        ) : null}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
