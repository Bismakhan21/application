import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import { Custom_Input_Field } from "../components/Custom_Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


import { loginAccount } from "../config/firebase/firebase_methods";
import { set_user_auth } from "../store/slices/user_auth_slice";


export const Login = () => {
  const [data, setData] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  console.log(data);

  const handleSubmit = async (e) => {
    e.prevantDefault();
    try{
      const loginAccount = await signInWithEmailAndPassword(auth, data.email, data.password)
      dispatch(set_user_auth(true))
      navigate('/home')
      console.log(loginAccount.user)
  }
  catch(error){
      const errorMessage = error.message;
      console.log(errorMessage)
      dispatch(set_user_auth(false))
  }
  };

  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center">
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="max-w-md w-[100%] space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Login
        </Typography>
        <div className="space-y-5">
          <Custom_Input_Field
            label="Email"
            required={true}
            id="email"
            onChange={handleChange}
            placeholder="Enter email"
            type="email"
          />
          <Custom_Input_Field
            label="Password"
            required={true}
            id="password"
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Custom_Button type="submit">Login</Custom_Button>
        <div className="text-center">
          Don't have account{" "}
          <Link to="/" className="text-primary underline">
            Signup Now
          </Link>
        </div>
      </Box>
    </div>
  );
};



