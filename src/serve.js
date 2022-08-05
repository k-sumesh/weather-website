import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import hbs from 'hbs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, "/public");
const viewPath=path.join(__dirname,'../templates/views')

const partialPath=path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)
const app = express();
app.set("view engine", "hbs");
app.set('views',viewPath)
app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.render("index", {
    name: "andrei med",
    title: "weather app",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    name: "andrei med",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help",
    name: "andrei med",
    helpText: "text to be shown in help",
  });
});


app.get('/products',(req,res)=>{
    if(!req.query.search){
       return res.send({
            error:'you must provide a search query'
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
    res.render('not-found')
})
app.listen(3000, () => {
  console.log("app is being listening to port 3000");
});
