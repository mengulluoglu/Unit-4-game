// Number should be between 19 - 120
//setting random variable
var randNum = Math.floor(Math.random() * 102) + 19;
//variables
var totalPoints = 0;
var wins = 0;
var losses = 0;

//Generate a random number into html with jQuery process
$("#rand-num").html("<h2>" + randNum + "</h2>");



$(".crystal").on("click", function() {
    totalPoints += parseInt(this.value);
    $("#total-score").text(totalPoints);

    //setting up loss or win
    //if total point equal to ranNum than it will be win
    if (totalPoints === randNum) {
        wins++;
        //updating score
        $("#wins").text("Wins: " + wins);
        $("#game-result").text("You win!");
        reset();
        // alert("You win!");
        //if totalPoints is greater than ranNum thna it will be losses
    } else if (totalPoints > randNum) {
        losses++;
        //updating score
        $("#losses").text("Losses: " + losses);
        $("#game-result").text("You lose!");
        reset();
        // alert("You lose!");
    }
})

function assignCrystalPoints() {
    var redPoints = Math.floor((Math.random() * 12) + 1);
    var bluePoints = Math.floor((Math.random() * 12) + 1);
    var yellowPoints = Math.floor((Math.random() * 12) + 1);
    var greenPoints = Math.floor((Math.random() * 12) + 1);
    //Random number has to be between 1 - 12


    $("#red-crystal").val(redPoints);
    $("#blue-crystal").val(bluePoints);
    $("#yellow-crystal").val(yellowPoints);
    $("#green-crystal").val(greenPoints);
}

function reset() {
    totalPoints = 0;
    $("#total-score").text(totalPoints);
    randNum = Math.floor(Math.random() * 102) + 19;
    $("#rand-num").html("<h2>" + randNum + "</h2>");
    assignCrystalPoints();
}

assignCrystalPoints();