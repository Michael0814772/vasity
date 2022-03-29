import React from "react";
import { Container, Grid, Toolbar } from "@mui/material";
import { TestimonyDetails } from "../../../components/testimonyDetails/TestimonyDetails";
import { adeyemi, fashina, fayemi, ike, obilor, okeke } from "../../../assets/assets";
import TestimonyDetailsTwo from "../../../components/testimonyDetails/TestimonyDetailsTwo";

const TestimonyOne = () => {
  return (
    <>
      <Toolbar sx={{ marginBottom: 15}}>
        <Container maxWidth="xl">
          <Grid container columnSpacing={10}>
            <TestimonyDetails
              image={ike}
              imageName="Joseph Ike"
              name="Joseph Ike"
              address="In Ikeja"
              btnName="CUSTOMER"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
            />

            <TestimonyDetails
              image={fashina}
              imageName="Adetola Fashina"
              name="Adetola Fashina"
              address="Ibadan"
              btnName="CUSTOMER"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
              unt ut voluptate aute id deserunt nisi.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <TestimonyDetails
              image={fayemi}
              imageName="Emmanuel Fayemi"
              name="Emmanuel Fayemi"
              address="In Akoka"
              btnName="CUSTOMER"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />

            <TestimonyDetailsTwo
              image={obilor}
              imageName="Chisom Obilor"
              name="Chisom Obilor"
              address="In Magodo"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
            />

            <TestimonyDetailsTwo
              image={adeyemi}
              imageName="Adunoluwa Adeyemi"
              name="Adunoluwa Adeyemi"
              address="Iwo Road"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
              unt ut voluptate aute id deserunt nisi.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <TestimonyDetailsTwo
              image={okeke}
              imageName="Chidi Okeke"
              name="Chidi Okeke"
              address="In Somolu"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />
          </Grid>
        </Container>
      </Toolbar>
    </>
  );
};

export default TestimonyOne;
