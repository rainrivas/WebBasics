var movies = [
	{
	    title: "In Bruges",
	    watched: true,
	    rating: 5
	}, 
	{
	    title: "Mad Maxx",
	    watched: true,
	    rating: 3
	}, 
	{
	    title: "Frozen",
	    watched: false,
	    rating:"" 
	}, 
	{
	    title: "Wreck It Ralph",
	    watched: true,
	    rating: 5
	}, 
	{
	    title: "Some bad made up movie",
	    watched: true,
	    rating: 1
	}
];

movies.forEach(function (currentMovie) {
	if(currentMovie.watched) {
		if(currentMovie.rating <2) {
			console.log("You have watched \"" + currentMovie.title + "\" -- Your Rating: " + currentMovie.rating + " star");
		}
		else console.log("You have watched \"" + currentMovie.title + "\" -- Your Rating: " + currentMovie.rating + " stars");
	}
	else console.log("You have not watched \"" + currentMovie.title + "\" -- Your Rating: N/A");
});

// Optimized solution 
/*
var result = "You have ";
if (currentMovie.hasWatched){
	result+="watched ";
} else {
	result += "not watched ";
}
result +="\"" + currentMovie.title + "\" -- ";
result += currentMovie.rating + " stars"; // optimized this code piece here to include the fact that I'm using if to count for 1 star
*/