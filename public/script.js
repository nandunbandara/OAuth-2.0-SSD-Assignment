// check if the token is set
const queryParams = window.location.search.substring(1); 
const token = queryParams.split('access_token=')[1];

console.log(token);