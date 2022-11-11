import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UploadStatus from './utils/UploadStatus';
import parseRecipeData from './parseRecipeData';

import Recipe from './pages/Recipe';
import Layout from './pages/Layout';
import Search from './pages/Search';
import About from './pages/About';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Upload from './pages/Upload';
import NoPage from './pages/NoPage';
import './App.css';
import './w3.css';

var socket;
var recipes = [];

export default function App() {
  let [loadedRecipes, setLoadedRecipes] = useState([]);
  let [recipeIndex, setRecipeIndex] = useState(0);

  let [recipesDidLoad, setLoadStatus] = useState(false);
  let [uploadStatus, setUploadStatus] = useState(UploadStatus.UNUSED);

  useEffect(() => {
    socket = io('https://dpruitt-recipes-backend.herokuapp.com/', {
      transports: ["websocket", "polling"]
    });
    socket.on('recipe query', function (query) {
      recipes = query.results.map(i => parseRecipeData(i));
      console.log("Updated recipes");

      setLoadedRecipes(recipes);
      setLoadStatus(true);
    });
    socket.on('upload status', function (status) {
      setUploadStatus(status);
    });
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    if (localStorage.recipeIndex != null) {
      console.log("Remembered user's saved recipe.");
      setRecipeIndex(localStorage.recipeIndex);
    }
  }, []);

  const search = recipesDidLoad ? (
    <Search recipes={loadedRecipes} onClick={setRecipeIndex} />
  ) : (
    <Loading />
  );
  const recipe = recipesDidLoad ? (
    <Recipe recipes={loadedRecipes} index={recipeIndex} />
  ) : (
    <Loading />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Search" element={search} />
          <Route path="/Upload" element={<Upload
            socket={socket}
            status={uploadStatus}
            update={setUploadStatus}
            setRecipeIndex={setRecipeIndex}
            getNumRecipes={loadedRecipes.length} />}
          />
          <Route path="/Recipe" element={recipe} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}