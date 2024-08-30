const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');  


class Endereco extends Model {
  static init(sequelize) {
    super.init({
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id',
        allowNull: false,
      },
      Cep: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Cep',
      },
      Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Logradouro',
      },
      Numero: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'Numero',
      },
      Complemento: {
        type: DataTypes.STRING,
        field: 'Complemento',
      },
      Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Bairro',
      },
      Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Cidade',
      },
      Estado: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Estado',
      },
      MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'MunicipioIBGE',
      },
    }, {
      sequelize,
      modelName: 'Endereco',
      tableName: 'enderecos',
      timestamps: false,
      underscored: true,
    });
  }
}


module.exports = Endereco;