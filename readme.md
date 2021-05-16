## About

This is a prototype for a MEAN stack implementation of an insurance claims search application. Its purpose is to
allow a user to lookup injury claim settlement amounts. It currently supports
searching by insurance company name. 

## How to compile and run the application 

### Server setup
cd into /injury-claims-server
create a credentials.js file
it should contain the following:
module.exports = {
host:
username:
password:
database:
}
with the corresponding values to connect to your mongodb instance.

back in your terminal at /injury-claims-server
type 'npm install" to install the needed dependencies
once dependencies have finished installing
type 'nodemon app.js' to start the server.
The console should now display 'server running on port 3000!'

### Loading data
There may be a fancier way to load test data but you can simply
make a POST call (using postman or curl) to http://localhost:3000/claims
with the following body:
{
    "injuryType": "concussion",
    "insuranceCompany": "Liberty Mutual",
    "settlementAmount": "8000",
    "zipCode" : "02121"
}
Then, simply make a few more just chaning the zip code and company name fields.

### Client setup
This might be trickier but theortically you should be able to follow these steps. 
cd into /injury-claims-client
type 'npm install" to install the needed dependencies
once dependencies have finished installing
type 'ng serve --open'
the angular development server will start and your default brower will open
the app at localhost:4200

 ## API

 api supports only JSON

 GET /claims
 will return all claims

 GET /claims?insuranceCompany=XXX
 will return call claims matching that company name

 GET/claims?zipCode=XXX
 will return all claims matching that zip code

 POST /claims
 adds a new claim to the database







