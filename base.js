$(document).ready(function(){
  // code in here!
  
$.get("mock_data.js", render(mockData));

var input = $('input');
var searchStr = "mock_data.js";
var newSearch; 
var trending = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
$.get(trending, render);


input.on("change", function(event){
    newSearch = (event.target.value);
    searchStr = "http://api.giphy.com/v1/gifs/search?q=" + newSearch + "&api_key=dc6zaTOxFJmzC"
    $.get(searchStr, render);
    console.log(searchStr)
})



function render(data){
    var children = data.data;
    $(".gifs").empty()
    console.log(data)
    children.forEach(function(item, i){
        $(".gifs").append("<img src='" + item.images.fixed_height.url + "'>");

    });
}

})





