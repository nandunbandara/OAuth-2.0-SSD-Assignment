// check if the token is set
const queryParams = window.location.search.substring(1); 
const token = queryParams.split('access_token=')[1];

console.log(token);

fetch('https://api.github.com/user', {
    headers: {
        Authorization: 'token ' + token
    }
})

.then( res => res.json())
.then( res => {
    console.log(res);

    $("#avatar").attr("src", res.avatar_url);
    document.getElementById('username').innerHTML = res.login;
})
.catch( err => {
    window.location.href = "http://localhost:8090/";
})