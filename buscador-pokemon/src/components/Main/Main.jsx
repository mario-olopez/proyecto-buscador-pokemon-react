import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchContainer from "./SearchContainer"
import PokemonForm from "./PokemonForm"

const Main = () => {
  return <div>
    <Routes>
      <Route path="/" element={<SearchContainer />}/>
      <Route path="/new" element={<PokemonForm />}/>
    </Routes>
  </div>;
};

export default Main;
