import React from 'react';
import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UploadStatus from './utils/UploadStatus';

import Recipe from './pages/Recipe';
import Layout from './pages/Layout';
import Search from './pages/Search';
import About from './pages/About';
import Home from './pages/Home';
import Upload from './pages/Upload';
import NoPage from './pages/NoPage';
import './App.css';
import './w3.css';

var socket;
var recipes = [];

function parseRecipeData(recipe) {
  let parsedObj = {
    title: recipe.name,
    description: recipe.description,
    ingredients: recipe.ingredients,
    directions: recipe.diretions,
  };

  parsedObj.ingredients = recipe.ingredients.map((item) => {
    return { value: item };
  });
  parsedObj.directions = recipe.directions.map((item) => {
    return { value: item };
  });

  return parsedObj;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedRecipes: [
        {
          title: "test",
          description: "test",
          ingredients: [],
          directions: []
        }
      ],
      recipesDidLoad: false,
      recipeIndex: 0,
      uploadStatus: UploadStatus.UNUSED
    };

    this.setRecipeIndex = this.setRecipeIndex.bind(this);
    this.getNumRecipes = this.getNumRecipes.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    const thisScope = this;
    socket = io('https://dpruitt-recipes-backend.herokuapp.com/', {
      transports: ["websocket", "polling"]
    });
    socket.on('recipe query', function (query) {
      recipes = query.results.map(i => parseRecipeData(i));
      console.log("Updated recipes");
      thisScope.setState({
        loadedRecipes: recipes,
        recipesDidLoad: true,
      });
      console.log(this.state.recipesDidLoad);
    });
    socket.on('upload status', function (status) {
      thisScope.updateStatus(status);
    });
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }

  setRecipeIndex(i) {
    this.setState({ recipeIndex: i });
  }

  getNumRecipes() {
    return this.state.loadedRecipes.length;
  }

  updateStatus(status) {
    this.setState({ uploadStatus: status });
  }

  render() {
    const search = recipesDidLoad ? (
      <Search recipes={this.state.loadedRecipes} onClick={this.setRecipeIndex} />
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
              status={this.state.uploadStatus}
              update={this.updateStatus}
              setRecipeIndex={this.setRecipeIndex}
              getNumRecipes={this.getNumRecipes} />}
            />
            <Route path="/Recipe" element={<Recipe recipes={this.state.loadedRecipes} index={this.state.recipeIndex} />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;