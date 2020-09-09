module.exports=app=>{
const subcategoria = require("../controllers/Obtener.js");
  app.get("/subcategorias",product.findAll);  
  app.get("/Products/:productId", product.findOne);
  app.post("/Products", product.create);
  app.delete("/Products/:productId",product.delete);
  app.put("/Products/:productId",product.update)
}