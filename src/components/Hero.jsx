import React from "react";
import Paper from "@mui/material/Paper";
import { Button, Stack } from "@mui/material";
// import DonorForm from "./Donor/DonorForm";
// import ListingDonor from "./Donor/ListingDonor";
import { Link, useNavigate } from "react-router-dom";

export const Hero = () => {

  const navigate = useNavigate;
  return (
    <>
      <Paper
        elevation={16}
        sx={{ margin: "50px 60px", width: "90%", minHeight: "80vh",background:{} }}
      >
        <Stack sx={{ marginTop: "80px", padding: "20px" }}>
          <Stack
            sx={{
              fontSize: "5rem",
              fontWeight: "700",
              textAlign: "center",
              color: "red",
            }}
          >
            {" "}
            <h1>Blood bank for Saving Life</h1>{" "}
          </Stack>

          <Stack
            sx={{ fontSize: "3.5rem", fontWeight: "500", textAlign: "center" }}
          >
            {" "}
            <h2>
              Blood banking refers to the process of collecting, separating, and
              storing blood.
            </h2>{" "}
          </Stack>
          <Button><Link to={'/donor'}>Donor</Link></Button>

          {/* <Button><Link to='/receipient'>Reciepient</Link></Button> */}
        </Stack>
      </Paper>
    </>
  );
};