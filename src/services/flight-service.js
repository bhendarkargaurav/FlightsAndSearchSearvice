const {FlightRepository, AirplaneRepository} = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw{error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);  
            const flight = await this.flightRepository.createflight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer ");
            throw {error};
        }
    }
    async getAllFlightData(data) {
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw{error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw{error};
        }
    } 

    async updateFlight(flightId, data) {
        try {
            const response = await this.flightRepository.updateFlights(flightId);
            return response;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw{error};
        }
    }
}

module.exports = FlightService;

/**
 * {
 * flightNumber
 * airplabeId
 * departureairportId
 * arrivalairportId
 * arrivalTime
 * departureTime
 * price
 * totalseats -> airplane
 * }
 */