import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/components/Layout/Layout";
import CharacterList from "../src/components/CharacterList/CharacterList";

function App() {
  return (
    <>
      <Layout>
        <Route path="/" exact component={CharacterList} />
      </Layout>
    </>
  );
}

export default App;
