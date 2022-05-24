const express = require ('express');

const app = express()
const port = 3000

// app.get('/',  (req,  res) => {
//     res.send(' Magic World')
// })


app.set('view engine', 'hbs'); //setup template engine / view engine

app.use('/public', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/add-project', (req,res) => {
    res.render('add-project')
})

app.get("/contact-me", (req, res) => {
    res.render("contact-me");
  });
  
  app.post("/contact-me", (req, res) => {
    const data = req.body;
    console.log(data);
  
    res.redirect("/contact-me");
  });
  
  app.post("/add-project", (req, res) => {
    const data = req.body;
    console.log(data);
  
    res.redirect("/");
});

app.get('/my-project-detail', (req, res) => {
  const index = req.params.index;

  res.render('my-project-detail', { data: index, number: '2022' });
});



app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
