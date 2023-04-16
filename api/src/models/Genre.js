const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("genre", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
