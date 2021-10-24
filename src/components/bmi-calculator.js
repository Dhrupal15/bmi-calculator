import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "./bmi-calculator.styles.scss";

const BmiCalculator = () => {
  const [height, setHeight] = useState();
  const[heightError, setHeightError]= useState();
  const[weightError, setWeightError]= useState()
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [open, setOpen] = useState(false);
  const handleBmi = () => {
    if (height !== "" && weight !== "") {
      setOpen(true);
      let val = (
        [Number(weight) / Number(height) / Number(height)] * 10000
      ).toFixed(1);
      setBmi(val);
      if (val < 18.5) {
        setInfo("Under Weight");
      } else if (val > 18.5 && val <= 24.9) {
        setInfo("Healthy");
      } else if (val > 24.9 && val < 30) {
        setInfo("Overweight");
      } else {
        setInfo("Obese");
      }
    }
    else{
        if(height===""){
            setHeightError("Please enter your height in cms")
        }
        if(weight===""){
            setWeightError("Please enter your weight in kgs")
        }
    }
  };

  const handleClose = () => {
    setOpen(false);
    setHeight("");
    setWeight("");
  };
  return (
    <div className="containers">
      <h1 className="title">BMI Calculator</h1>
      <div className="wrapper">
        <div className="input">
          <label className="label">Height : </label>
          <TextField
            fullWidth
            className="textfield"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in cm"
            value={height}
            error={heightError?true:false}
            helperText={heightError}
          />
        </div>
        <div className="input">
          <label className="label">Weight : </label>
          <TextField
            fullWidth
            className="textfield"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
            value={weight}
            error={weightError?true:false}
            helperText={weightError}
          />
        </div>
        <div className="input">
          <button variant="contained" onClick={handleBmi}>
            Calculate
          </button>
        </div>
      </div>
      <Dialog open={open} fullWidth maxWidth="sm" onClose={handleClose}>
        <DialogTitle sx={{fontWeight:"bold"}}>Your BMI</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{color:"black"}}>
            BMI Ratio:{bmi}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description"  sx={{color:"black"}}>
            BMi Status:{info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default BmiCalculator;
