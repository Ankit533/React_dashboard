import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.60)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto'",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

function submit() {

  if (document.getElementById("Username").value === "") {
    document.getElementById("Username").focus();
  }
  else if (document.getElementById("Email").value === "") {
    document.getElementById("Email").focus();
  }
  else if (document.getElementById("Firstname").value === "") {
    document.getElementById("Firstname").focus();
  }
  else if (document.getElementById("Lastname").value === "") {
    document.getElementById("Lastname").focus();
  }
  else if (document.getElementById("Number").value === "") {
    document.getElementById("Number").focus();
  }
  else if (document.getElementById("Address").value === "") {
    document.getElementById("Address").focus();
  }
  else if (document.getElementById("Postalcode").value === "") {
    document.getElementById("Postalcode").focus();
  }
  else{
    console.log("Data Rec")
  }
  var usrname = document.getElementById("Username").value;
  console.log(usrname);
  var mail = document.getElementById("Email").value;
  console.log(mail);
  var Fname = document.getElementById("Firstname").value;
  console.log(Fname);
  var Lname = document.getElementById("Lastname").value;
  console.log(Lname);
  var Addr = document.getElementById("Address").value;
  console.log(Addr);
  var Num = document.getElementById("Number").value;
  console.log(Num);
  var Pcode = document.getElementById("Postalcode").value;
  console.log(Pcode);
  axios({
    method:"post",
    url:'http://localhost:30000/',
    data:{
     "Username":usrname,
     "Email":mail,
     "Firstname":Fname,
     "Lastname":Lname,
     "Address":Addr,
     "Number":Num,
     "Postalcode":Pcode
    }
  
//   .then (Response => {
//     '<script>alert("Information Saved")</script>'
//   })
// .catch (err =>{
//   '<script>alert("Something Went wrong")</script>'
// })
  })
}


export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer >
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody >
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="WILL TECHNOLOGIES"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Username"
                    id="Username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email address"
                    id="Email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="Firstname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="Lastname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Contact Number"
                    id="Number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Address"
                    id="Address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Country"
                    id="Country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem> */}
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Postal Code"
                    id="Postalcode"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={submit}>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
    </div>
  );
}
