# COVID-19 graph tracking and analysis
A web application used by the health system authorized personel that provides means to input infected patients minimal data and that can further perform analysis of the data using graph theory algorithms.

# Get it running
*  Clone this repository
*  `cd frontend`
*  `npm install`
*  `cd ../`
*  `sbt run`

This will run the application locally.

# Release
When a new version is to be released we will use heroku cli.

# Contribute
One can contribute to the frontend independently of the backend. The same for the backend.

# Build
When modifying the frontend one needs to:
*  `cd frontend`
*  `ng build --prod --output-path ../src/main/resources/client`
*  stop/run the backend again