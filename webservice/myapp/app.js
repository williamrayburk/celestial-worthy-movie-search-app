/*
Main TODOs:
Pseudocode main method to start an embedded server
 Recommendation to define the API specs first using Postman
Pseudocode back end service call to TMDB API 
Pseudocode return of results from back end to web service through REST API 
Pseudocode unit tests using Mocha
*/

//Declare global variables and constants

//Call applicable functions below and pass in applicable arguments
//Call to TMDB API will happen when webapp makes the request through REST API to this webservice

//Function Def: Main method to start embedded server

//Function Def: Call TMDB API
/*
Response must construct according to this API spec. Helpful to construct first using Postman:

Request: GET ..../movies?search={title}
Response:
  [
    {
      "movie_id": integer,
      "title": string,
      "poster_image_url": string, (https://developers.themoviedb.org/3/getting-started/images)
      "popularity_summary": string,
      (i.e. "{popularity} out of {vote_count}")
},
... (limit of 10)
]
*/

//Function Def: Return filtered results to front-end through REST API
//This may be done as part of the function above, not sure yet

//I will filter the results as explained in my Project Plan









