//a set of dummy data with flight informations
const flights = [
    {
        flightNum: 'SQ123',
        airline: 'Singapore Airlines',
        gateNum: 13,
        arrival: 0900,
        departure: 1900,
        destination: 'France',
        origin: 'Singapore'
    },
    {
        flightNum: 'ID017',
        airline: 'Air Asia',
        gateNum: 21,
        arrival: 2100,
        departure: 1900,
        destination: 'Singapore',
        origin: 'Indonesia',
    },
    {
        flightNum: 'UAE7Q',
        airline: 'Emirates Airlines',
        gateNum: 7,
        arrival: 2100,
        departure: 1300,
        destination: 'Dubai',
        origin: 'Singapore'
    },
    {
        flightNum: 'EQ712K',
        airline: 'Emirates Airlines',
        gateNum: 14,
        arrival: 1500,
        departure: 0700,
        destination: 'Singapore',
        origin: 'Dubai'
    }
]

//This is a function to retrieve flight Informations based on FlightNum 
function retrieveFlightInfo(flightNum) {
    //checks if there are flights with the given flightNum in the param and is assigned to flight variable
    let flight = flights.find((flightInfo) => flightInfo.flightNum === flightNum);

    if (!flight) {
        //returns a message if there are no such flights
        return `There are no such flights scheduled`;
    }
    else {
        //displays the flight information based on flightNum
        return flight;
    }
}

//This is a function to search for flight arrival and departure times based on FlightNum
function searchArrivalandDepartureTimes(flightNum) {
    //checks for flightNum and assigns the flightInfo into the flight variable
    let flight = flights.find((flightInfo) => flightInfo.flightNum === flightNum);

    if (!flight){
        //returns a message when there are no such flights
        return 'There are no such flights scheduled for departure or arrival';
    }
    else{
        //assigns the flight arrival timing to arrival variable
        arrival = flight.arrival;
        //assigns the departure timing to arrival variable
        departure = flight.departure;
        //returns the timings based on flightNum
        return `Flight ${flightNum} will arrive at ${arrival}hrs and depart at ${departure}hrs`;
    }
}

//This is a function to search for flights based on location (can be origin or destination)
function searchFlightByLocation(location) {
    //checks for flights with matching origins or destination as location param and stores into flightLoc variable
    let flightLoc = flights.filter((loc) => loc.origin === location || loc.destination === location);

    if (flightLoc.length === 0) {
        //returns a message when there are no such flights
        return `There are no flights scheduled arriving or departing from ${location}`;
    }
    else {
        //returns all the flights with matching origins or destinations based on location
        return flightLoc;
    }
}

//This is a function to calculate the flight duration of a certain flight based on FlightNum
function flightDuration(flightNum) {
    //finds the flightInfo based on flightNum and stores into flight variable
    const flight = flights.find((f) => f.flightNum === flightNum);

    if (!flight) {
        //returns a message if there are no such flights
        return `There is no such flight scheduled.`
    }

    //stores flight departure and arrival timings into departure and arrival variables
    const departure = flight.departure;
    const arrival = flight.arrival;

    //Extracts the hours and minutes of departure timing
    const departureHour = Math.floor(departure / 100); // Extract hours
    const departureMinute = departure % 100; // Extract minutes

    //Extracts the hours and minutes of arrival timing
    const arrivalHour = Math.floor(arrival / 100); // Extract hours
    const arrivalMinute = arrival % 100; // Extract minutes

    //Calculates the time in minutes for both arrival and departure
    const departureInMinutes = departureHour * 60 + departureMinute;
    const arrivalInMinutes = arrivalHour * 60 + arrivalMinute;

    //Calculate the difference in minutes between arrival and departure
    let durationInMinutes = arrivalInMinutes - departureInMinutes;

    //If the duration is negative, it means the flight ends on the next day, so add another one whole day to total
    if (durationInMinutes < 0) {
        durationInMinutes += 24 * 60; //Add 24 hours in minutes
    }

     //Convert the duration from minutes to hours
    const durationInHours = durationInMinutes / 60;

    //Returns the total hours
    return durationInHours + ' Hours';


}

//This is a function to search for flights that are parked at gates
//This function will take in 'gate numbers' as the param 
//and will return any flight that is parked at that gate
function searchFlightByGate(gates) {
    //Search for flights with matching gateNum as 'gates' param
    const gateNo = flights.find((g) => g.gateNum === gates);

    if (!gateNo) {
        //returns a message if there are no such flights
        return `There are no planes currently at gate ${gates}`;
    }
    
    //returns the the flight that is parked at the gate
    return `Flight ${gateNo.flightNum} is currently parked at gate ${gates}`;
}

//This is a function to search flight destinations based on the airline given
function searchFlightByAirline(airline){

    //an empty array is initialised to store the flights 
    const airlines = [];

    //loops throught the array of flights
    for(let i = 0; i < flights.length; i++){
        //checks if there are any airlines that has a flight based on the given airline name
        if(flights[i].airline === airline){
            //pushes the matching flight destination into the empty array
            airlines.push(flights[i].destination);
        }
    }

    //checks if there are any flights in the array
    if(airlines.length > 0){
        //returns the destinations based on the given airline name
        return `There are ${airlines.length} flights by ${airline} going to ${airlines}`;
    }else{
        //returns a message when there are no such flights
        return `There are no scheduled flights by ${airline}`;
    }
}

module.exports = {
    retrieveFlightInfo,
    searchArrivalandDepartureTimes,
    searchFlightByLocation,
    flightDuration,
    searchFlightByGate,
    searchFlightByAirline,
};