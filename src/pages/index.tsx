import React from "react";
import Head from "next/head";
import logo from "../assets/images/logo.webp";
import Teste from "../assets/images/teste.svg";
import { Container } from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <Container>
        <img src={logo} alt="Logo" />
        <Teste />
      </Container>
    </div>
  );
};

export default Home;
