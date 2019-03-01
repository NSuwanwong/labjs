$(function(){
    // var url='http://api"+keywordl;
    //$.get(url,blar blar balr);'
    $('#go').click(function(){
        var keyword=$("#keyword").val();
        var url= 'http://www.omdbapi.com/?apikey=3064720e&s='+keyword;
        $.get(url,function(data,status){
            if(status=='success'){
                var movies=data.Search;
                var tableHead = '<tr><th>Title</th><th>Year</th><th>imdbID</th><th>Type</th><th>Poster</th></tr>';
                $("#movielist").empty();
                $("#movielist").append(tableHead);
                console.log(data);
                for(var index in movies){
                    var movie = movies[index];
                    var poster = '<img src="'+movie.Poster+'">';
                    var movieRow='<tr><td>'+movie.Title+'</td><td>'+movie.Year+'</td><td>'+movie.imdbID+'</td><td>'+movie.Type+'</td><td>'+poster+'</td></tr>';
                    $("#movielist").append(movieRow);
                    console.log(movie.Title);
                }
            }else{
                console.log(status);
                
            }
        });
    });
    $.get("imdb.json",function(data,status){
        if(status=='success'){
            var movies=data.Search;
            var tableHead = '<tr><th>Title</th><th>Year</th><th>imdbID</th><th>Type</th><th>Poster</th></tr>';
            $("#movielist").append(tableHead);
            for(var index in movies){
                var movie = movies[index];
                //var item ='<div class="col-3">'+movie.Title+'</div>';
                var poster = '<img src="'+movie.Poster+'">';
                var movieRow='<tr><td>'+movie.Title+'</td><td>'+movie.Year+'</td><td>'+movie.imdbID+'</td><td>'+movie.Type+'</td><td>'+poster+'</td></tr>';
                $("#movielist").append(movieRow);
                console.log(movie.Title);
            }

        }else
            console.log(status);
    });
});