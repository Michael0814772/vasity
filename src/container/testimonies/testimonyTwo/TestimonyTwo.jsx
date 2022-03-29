import { Container, Grid, Toolbar } from "@mui/material";
import React from "react";
import {
  amos,
  arinola,
  ibeh,
  promise,
  temi,
  uzoh,
} from "../../../assets/assets";
import TestimonyDetailsTwo from "../../../components/testimonyDetails/TestimonyDetailsTwo";

const TestimonyTwo = () => {
  return (
    <>
      <Toolbar sx={{ marginBottom: 25 }}>
        <Container maxWidth="xl">
          <Grid container columnSpacing={10}>
            <TestimonyDetailsTwo
              image={temi}
              imageName="Temi Obadofin"
              name="Temi Obadofin"
              address="In Ikeja"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
            />

            <TestimonyDetailsTwo
              image={promise}
              imageName="Adetola Fashina"
              name="Adetola Fashina"
              address="Ibadan"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
              unt ut voluptate aute id deserunt nisi.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <TestimonyDetailsTwo
              image={arinola}
              imageName="Emmanuel Fayemi"
              name="Emmanuel Fayemi"
              address="In Akoka"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
            />

            <TestimonyDetailsTwo
              image={ibeh}
              imageName="Chisom Obilor"
              name="Chisom Obilor"
              address="In Magodo"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
            />

            <TestimonyDetailsTwo
              image={uzoh}
              imageName="Adunoluwa Adeyemi"
              name="Adunoluwa Adeyemi"
              address="Iwo Road"
              btnName="VENDOR"
              details="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
              unt ut voluptate aute id deserunt nisi.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <TestimonyDetailsTwo
              image={amos}
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

export default TestimonyTwo;
