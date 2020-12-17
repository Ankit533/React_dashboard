/*eslint-disable*/
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="http://localhost:3000/admin/dashboard" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#About" className={classes.block}>
                About Us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="" className={classes.block}>
                About Us
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://willtechnologies.in/"
              target="_blank"
              className={classes.a}
            >
            Will Technologies
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
