module.exports=app=>{
    const subcategoria = require("../controllers/subcategoria.controller.js");
      app.get("/subcategorias/:cod_categoria",subcategoria.findAll);  
      app.get("/subcategorias/:cod_sub_categoria",subcategoria.findOne);
      app.post("/subcategorias",subcategoria.create);
      app.delete("/subcategorias/:cod_sub_categoria",subcategoria.delete);
    }