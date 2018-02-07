//modules
const express = require(`express`);
const bodyParser = require(`body-parser`);


//apps
const app = express();

//consts
const PORT = process.env.PORT || 3001;

//routes
const cartRoute = require( `./routes/cart`);
const productsRoute = require(`./routes/products`);
const usersRoute = require(`./routes/users`);

//middleWare
app.use(bodyParser.urlencoded({ extended: true}));
app.use(`/cart`, cartRoute);
app.use( `/products`, productsRoute);
app.use(`/users`, usersRoute);



//start server
app.listen(PORT, (err) => {
  if (err) { throw err};
  console.log(`Server keep runnin' runnin' on ${PORT}`)
});