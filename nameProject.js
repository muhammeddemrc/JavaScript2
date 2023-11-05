// istenilen adın ilk harfinin büyük geriye kalan harflerin küçük yazılmasını istiyorsunuz

var names = prompt("What is your name?");

var nameFirstLetter = names.slice(0,1);

var nameRemains = names.slice(1,);

alert("Hello, " + nameFirstLetter.toUpperCase() + nameRemains.toLowerCase());