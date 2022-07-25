import { useDispatch, useSelector } from "react-redux";
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import { fetchWeight, fetchHeight } from "../../../features/user/SignupSlice";

export default function BodyFrom() {
  const dispatch = useDispatch();
  const weight = useSelector(state => state.signup.userInfo.weight);
  const height = useSelector(state => state.signup.userInfo.height);

  function onWeightHandeler (e) {
    dispatch(fetchWeight(e.target.value))
  }
  function onHeightHandler (e) {
    dispatch(fetchHeight(e.target.value))
  }
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <InputBox>
    <label>키</label>
      <p>{height}</p>
      <Slider
          defaultValue={160}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={5}
          marks
          min={80}
          max={250}
        />
      <label>몸무게</label>
      <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
          <Input
            type="number"
            value={weight}
            onChange={onWeightHandeler}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          />
          <FormHelperText>Weight</FormHelperText>
        </FormControl>
    </InputBox>
  )
}