'use strict';
<<<<<<< HEAD
const { Model } = require('sequelize');
=======
// const {
//   Model
// } = require('sequelize');
import { Model, DataTypes } from 'sequelize';
>>>>>>> de2cbe4548668ce376d5c04a100cfd13f33d8ec1
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      this.hasMany(models.Airport, {
        foreignKey: 'cityId'
      });
=======
>>>>>>> de2cbe4548668ce376d5c04a100cfd13f33d8ec1
    }
  }
  City.init({
    name: {
<<<<<<< HEAD
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
  }, {
=======
      type:DataTypes.STRING,
      allowNull: false
  }, 
}, {
>>>>>>> de2cbe4548668ce376d5c04a100cfd13f33d8ec1
    sequelize,
    modelName: 'City',
  });
  return City;
<<<<<<< HEAD
};
=======
};

>>>>>>> de2cbe4548668ce376d5c04a100cfd13f33d8ec1
