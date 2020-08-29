import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";

import { CategoryItemType } from "./data";

interface Props {
  data: Array<CategoryItemType>;
}

function CategoryItem(props: CategoryItemType) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid gray",
        textAlign: "left",
        padding: 20,
      }}
      onClick={() => {}}
    >
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="subtitle1">{props.lastUpdated}</Typography>
      <Typography variant="subtitle1">{props.resources}</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {props.tags.map((t, i) => (
          <Chip
            color="primary"
            style={{ backgroundColor: t.bgColor, marginRight: 8 }}
            label={t.title}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function CategoryList(props: Props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.data.map((i) => CategoryItem(i))}
    </List>
  );
}
