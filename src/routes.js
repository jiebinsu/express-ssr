import express from "express";
import React from "react";
import ReactDOM from 'react-dom/server';

import Home from "./compositions/home/home";

const router = express.Router();

router.get("/", async (req, res) => {
  const reactComp = ReactDOM.renderToString(<Home />);
  res.render('index', { content: reactComp });
});

export default router;