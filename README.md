# Fathir_FlightSystem Module

This node.js module provides functionalities for retrieving flight informations and calculating flight durations.

# Installation
Ensure you have [Node.js downloaded and installed](https://nodejs.org/en/download/). This node module was done with Node.js v16.17.0.

# Getting started
Include the module into your project:
```javascript
const flightSearch = require('./Fathir_FlightSystem');
```
# Flight Information Data
Flight Informations will be given as shown to know what flights can be retrieved from the dummy data.
```
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
```

# Functions
## **1. Get flight information by FlightNum**
- **retrieveFlightInfo()** returns a json object with flight informations based on the given FlightNum.
### **Calling of function**
```javascript
const getFlightInfo = flightSearch.retrieveFlightInfo(FlightNum);
console.log(getFlightInfo);
```
You can also retrieve informations by using the keys from the json object.
```javascript
const getFlightInfo = flightSearch.retrieveFlightInfo('ID017');
console.log(getFlightInfo.airline);
```

## **2. Get arrival and departure times by FlightNum**
- **searchArrivalandDepartureTimes()** returns the timings of the arrival and departure of the flight based on the given FlightNum.
### **Calling of function**
```javascript
const getTimings = flightSearch.searchArrivalandDepartureTimes('UAE7Q');
console.log(getTimings);
```
## **3. Get flights by location**
- **searchFlightByLocation()** returns flights with the same origin and destination as location given.
### **Calling of function**
```javascript
const getFlightLoc = flightSearch.searchFlightByLocation('Dubai');
console.log(getFlightLoc);
```

## **4. Calculate flight duration**
- **flightDuration()** returns the total flight hours based on flightNum given.
### **Calling of function**
```javascript
const flightDur = flightSearch.flightDuration('UAE7Q');
console.log(flightDur);
```

## **5. Get flights by gate**
- **searchFlightByGate()** returns the flight parked at the given gate number.
### **Calling of function**
```javascript
const gateNum = flightSearch.searchFlightByGate(7);
console.log(gateNum);
```

## **6. Get flights by Airline**
- **searchFlightByAirline()** returns all the scheduled flights and destination by the Airline given.
### **Calling of function**
```javascript
const getFlight = flightSearch.searchFlightByAirline('Emirates Airlines');
console.log(getFlight);
```
