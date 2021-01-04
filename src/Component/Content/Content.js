import React from "react";
import "./Content.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  date_container: {
    margin: "80px 0",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
    //   border:'1px solid black'
  },
  numfield: {
    width: "70px",
    marginLeft: "5px",
    // border:'1px solid black'
  },
  btn: {
    padding: "10px  10px",
    boxSizing: "border-box",
    height: "30px",
    lineHeight: "32px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "120px",
    whiteSpace: "nowrap",
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <>
      <div className="text_container">
        <div className="text_fly ">
          <h1>
            <i>Ferofly</i>
          </h1>
          <span>
            <i>-Magnify your Journey-</i>
          </span>
        </div>
        <div className="text_image">
          <img
            src="https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_631,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp"
            alt="hotel"
          ></img>
        </div>
      </div>
      <div className={classes.date_container}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Check in"
            type="date"
            defaultValue="dd-mm-yyyy"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="date"
            label="Check out"
            type="date"
            defaultValue="dd-mm-yyyy"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            type="number"
            defaultValue="1"
            label="Adult"
            className={classes.numfield}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="date"
            type="number"
            defaultValue="0"
            label="Child"
            className={classes.numfield}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            className={classes.btn}
            style={{ backgroundColor: "black", color: "#fff" }}
          >
            Select
          </Button>
        </form>
      </div>
      <div className="about" style={{ marginBottom: "80px" }}>
        <div>
          <h4>About</h4>
        </div>
        <div className="para">
          <span>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </span>
        </div>
      </div>
    </>
  );
};

export default Content;
