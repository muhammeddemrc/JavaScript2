var you = prompt("What is your name ?");

var yourlove = prompt("What is your love name ?");

var loveScore = Math.random();

loveScore = loveScore*100 + 1;

loveScore = Math.floor(loveScore);
    

if (loveScore > 70 ) {
    alert("Birbrinize çok aşıksınız :)");
}
else {
    alert("Aşk oranınız %" + loveScore )
}