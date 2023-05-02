const express = require('express');
const faker = require('faker');

const routerApi = require('./routes');

const app = express(); const port = 3000;
app.get('/', (req, res) => { res.send('Hola mi server en express'); });
app.get('/home', (req, res) => { res.send('Bienvedio'); });

 app.get("/user",(req,res)=>{
  res.json({
    user: faker.commerce.productName(),

  });
 })

routerApi(app);
app.listen(port, () => { console.log('El servido se esta ejecutanado' + port); });



//  const express = require('express');
//  const routerApi = require("./routes");
//  const app = express();
//  const port = 3000;

//  app.get("/",(req,res)=>{
//   res.send("hello word");
//  })

//  app.get("/home",(req,res)=>{
//   res.send("Bienvedio ");
//  })

//  routerApi(app);

// //  app.get("/categories/:id",(req,res)=>{
// //   const {id} = req.params.id;

// //   res.json({

// //     id,
// //     name: "Fideos",
// //       price: 10

// //    }); })



// //  app.get("/users", (req,res)=>{
// //   const {limit, offset} = req.query;
// //   if(limit && offset){
// //     res.json({
// //       limit,
// //       offset
// //     });

// //   }else {
// //     res.send("No hay parametros")
// //   }
// //  })



// //  app.get("/categories/:categoryId/products/:productId", (req,res)=>{
// //   const {categoryId,productId} = req.params;

// //   res.json({
// //     categoryId,
// //     productId,
// //    });


// //  })

//  app.listen(port ,()=>{
//   console.log("El servido se esta ejecutanado" + port);
//  })

