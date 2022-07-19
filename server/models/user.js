'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    email: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    password: DataTypes.STRING,
    website: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};