

$(document).load(function(){

    var search = "workout"

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log('mo')
    })
})