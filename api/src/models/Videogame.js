const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  //id, nombre, descripcion, plataformas, imagen  , fecha_lanzamiento, rating, genre
  //PK, !Null , !Null MV   , !Null MV   , !Null MV,
  sequelize.define("videogame", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Missing description",
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Missing platform",
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Missing image",
    },
    fecha_lanzamiento: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Missing date",
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "Missing rating",
    },
    genre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
  });
};
