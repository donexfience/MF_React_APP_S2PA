import React from "react";
import { Navbar } from "../navbar/Navbar";
import Hero from "./Hero";
import Outcome from "./OutCome";
import Footer from "../footer/Footer";
import Doctors from "./Doctors";
import { useDispatch } from "react-redux";
import { setSharedData } from "@donexfdz/microfrontends-utility";
interface HomeProps {
  datafromRoot: any;
}

export const Home: React.FC<HomeProps> = ({ datafromRoot }) => {
  const dispatch = useDispatch();
  const sendData = () => {
    dispatch(setSharedData({ user: "donex", age: 22 }));
  };
  sendData();
  return (
    <div>
      <Navbar />
      {console.log(datafromRoot)}
      <Hero data={datafromRoot} />
      <Outcome />
      <Doctors />
    </div>
  );
};
