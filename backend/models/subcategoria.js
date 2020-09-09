const sql = require('../util/database.js');



const SubCategoria = function (SubCategoria) {
  this.nombre = SubCategoria.nombre;
  this.descripcion = SubCategoria.descripcion;
  this.fechaCreacion = SubCategoria.fechaCreacion;
}
SubCategoria.create = (newSubCategoria, result) => {
  sql.query("INSERT INTO SubCategoria SET ?", newSubCategoria, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    console.log("SubCategoriao Creado: ", { cod_Sub_Categoria: res.insertcod_Sub_Categoria, ...newSubCategoria });
    result(null, { cod_Sub_Categoria: res.insertcod_Sub_Categoria, ...newSubCategoria });
  });
};

SubCategoria.getAll = (cod_categoria,result) => {
  sql.query(`select sc.COD_CATEGORIA,sc.NOMBRE,sc.FECHA_CREACION FROM subcategoria sc
  INNER JOIN categoria c
  on sc.COD_CATEGORIA = c.COD_CATEGORIA
  where c.COD_CATEGORIA=${cod_categoria}`, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }
    console.log("SubCategoriaos:", res);
    result(null, res);
  });
};

SubCategoria.findById = (cod_Sub_Categoria, result) => {
  sql.query(`SELECT * FROM SubCategoria WHERE cod_Sub_Categoria = ${cod_Sub_Categoria}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("SubCategoriao encontrado: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

SubCategoria.remove = (id, result) => {
  sql.query("DELETE FROM SubCategoria WHERE Cod_Sub_Categoria = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted subcategoria with id: ", id);
    result(null, res);
  });
};


module.exports = SubCategoria;