$(document).ready(function() {
    var $btnSets = $('#responsive'),
    $btnLinks = $btnSets.find('a');
 
    $btnLinks.click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.user-menu>div.user-menu-content").removeClass("active");
        $("div.user-menu>div.user-menu-content").eq(index).addClass("active");
    });
});

// check if the token is set
const queryParams = window.location.search.substring(1); 
const token = queryParams.split('access_token=')[1];

$('#loader').show();
$('#user-container').hide();

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
    $('#username').html(res.login);
    $('#name').html(res.name);
    $('#followers').html(res.followers);
    $('#following').html(res.following);
    $('#repos').html(res.public_repos);
    $('#bio').html(res.bio);

    $('#loader').hide();
    $('#user-container').show();

})
.catch( err => {
    window.location.href = "http://localhost:8090/";
})