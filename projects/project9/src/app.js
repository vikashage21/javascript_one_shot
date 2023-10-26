require('dotenv').config()

const express = require("express");

const app = express();

const hbs = require("hbs");

const path = require("path");

const staticPath = path.join(__dirname, "../public");

const pratialPath = path.join(__dirname, "../src/pratials");

const tempPath = path.join(__dirname, "../src/views");


app.use(express.static(staticPath));

app.set("view engine", "hbs");

hbs.registerPartials(pratialPath);

app.set("views", tempPath);

app.get("/", (req, res) => {
  res.render("index",{
    title:"home"
  });
});

app.get("/home", (req, res) => {
  res.render("index",{
    title:"home"
  });
});

app.get("/about", (req, res) => {
  res.render("about",{
    title:"about"
  });
});

app.get("/info", (req, res) => {
  res.render("info",{
    title:"info"
  });
});

app.get('*',(req,res)=>{


res.render('404')
})

app.listen(process.env.PORT, () => {
  console.log(`listing on port ${process.env.PORT}`);
});
