var tweet = prompt("Please enter the text.");

var tweetLenght = tweet.length;

var tweetResult = 140 - tweetLenght;

alert("You wrote " + tweetLenght + "characters and you have " + tweetResult + " characters" );

alert(tweet.slice(0,140));

// var tweet140 = tweet.slice(0,140);

// alert(tweet140);