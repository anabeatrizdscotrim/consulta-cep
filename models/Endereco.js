const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection'); /**/ 

class Endereco extends Model {
  static init(sequelize) {
    super.init({
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Cep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Numero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Complemento: {
        type: DataTypes.STRING,
      },
      Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize, // A instância do Sequelize é passada aqui
      modelName: 'Endereco',
      tableName: 'enderecos',
      timestamps: true,
    });
  }
}

module.exports = Endereco;
