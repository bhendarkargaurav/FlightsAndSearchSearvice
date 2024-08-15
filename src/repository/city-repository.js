const { City } = require('../models/index');

const { Op } = require('sequelize');

class CityRepository {
    async createCity({ name }){
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }

    async deleteCity({ cityId }){
        try {
            await City.destroy({ 
                where: {
                    id:cityId
                 }
            });
        } catch (error) {
            console.log("something went wrong in the repository")
            throw {error};
        }
    }


    async updateCity(cityId, data) {
        try {
            // the below aprroach also work but wii not return updated object
            // if we are using Pg then returning true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    };


    async getCity(cityId) {
        try {
            const city = await City.findByPp-(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository")
            throw {error};
        }
    };
}

module.exports = CityRepository;