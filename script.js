

$(document).ready(function(){

    var search = "workout"

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=1";

    $.ajax({
        url: queryURL,
        method: 'GET'

    }).then(function(response){
        console.log(response.data)
        var imag = response.data

        for(var i = 0; i<imag.length; i++)
        var image = imag[i].images.fixed_height.url;


        // console.log('ok')

        var imgdiv = $('<img>')
        imgdiv.addClass('pico')
        imgdiv.attr('src', image)

        $('.picholder').append(imgdiv)

    })
})

$('.btn').on('click', function(){
    

    
})