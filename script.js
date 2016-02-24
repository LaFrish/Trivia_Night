function playTrivia()
{
var question =("This actor has a game based off connecting other celebrities to him in 6 degrees.");
var optionA = "Kevin Bacon"
var optionB = "Tom Cruise"
var optionC = "Samuel L. Jackson"
var optionD = "Morgan Freeman"
correctAnswer= (optionA)






 =
["Which actor has a game based off connecting other celebrities to him in 6 degrees?", "Leonardo DiCaprio won an Oscar for which role?", "Which movie was nominated for the most Oscars?", "Which of these actors has not received an EGOT?", "Which movies is not based off a book?"],
["Who has hosted Saturday Night Live the most times?", "Who has been banned from SNL?", "Who has not been an anchor on Weekend Update?", "Who was not part of the original SNL cast?", "Who was been a SNL cast member the longest?"],
["Who is singer Elle King's famous father?", "Which of the following fellas did not date Taylor Swift?", "Who is Gwen Stefani's current beau?", "What diet plan is Oprah currently following?", "Who broke up with their ex by ghosting them?"]

optionA:["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix"], ["Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond"], ["Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"]

optionB: ["Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire"], ["Steve Martin", "Kanye West", "Jimmy Falon", "John Belushi", "Kenan Thompson"], ["Adam Sandler", "Harry Styles", "Gavin Rossdale", "Nutri-System", "Taylor Swift"]

optionC: ["Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect"], ["John Goodman", "Miley Cryus", "Dan Aykroyd", "Chevy Chase", "Seth Meyers"], ["Joey King", "John Mayer", "Adam Levine", "The Atkins Diet Program", "John Mayer"]

optionD: ["Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard"], ["Christopher Walken", "Paris Hilton", "Chevy Chase", "Dan Aykroyd", "Fred Armisen"], ["Elvis Presley", "Jake Gyllenhaal", "Chris Martin", "Jenny Craig", "Katy Perry"]

Correctanswer: ["Kevin Bacon", "None of the above", "Titanic", "Kate Winslet", "Matrix"], ["Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond"], ["Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"]
};
//list variables//
var instructions = document.getElementsByClassName(".instructions")
var question = document.getElementsByClassName(".question")
var optionA = li.getElementById(".optionA")
var optionB = li.getElementById(".optionB")
var optionC = li.getElementById(".optionC")
var optionD = li.getElementById(".optionD")
var correctAnswer = document.querySelector(".CorrectAnswer")
var playButton = document.getElementById(".playbutton")
var timer = document.querySelector(".timer")
var p1 = document.getElementById(".p1")
var b1 = document.getElementById(".b1")
var score = document.getElementById(".score")
score = 0;
i = 0;
//add eventlisteners//
//figure out function to provide
question.addEventListener("onload", startTimer)
optionA.addEventListener("onclick", changeGreen);
optionB.addEventListener("click", hide);
optionC.addEventListener("click", hide);
optionD.addEventListener("click", changeYellow);
correctAnswer.addEventListener("onclick", changeGreen);

//show correct answer in green & incorrect in red//
}
function (correctAnswer){
  li.body.style.backgroundColor = green
}
function(incorrectAnswer){
    li.body.style.backgroundColor = red
}

//round 1 then break//
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
//round 2 start//
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
//end round 2//
//start round 3//
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
//end of round 3 & game

//prompt outcome//

//loop questions//


//have timer//
function StartTimer() {
    document.getElementById('Loading').style.display = "none";
    document.getElementById('Loaded').style.display = "block";
    document.getElementById('1').style.display = "block";
    document.getElementById('qustn1').style.backgroundColor="#dd6e23";
    ct = setInterval("calculate_time()",100); // Start clock.
    setTimeOut("submitForm()", <?php echo $time_limit; ?>);
}

function submitForm() {
    document.getElementById("submit").submit();
}
function calculate_time() {
    var end_time = "<?php echo $_SESSION["start_time"]; ?>"; // Get end time from session variable (total time in seconds).
    var dt = new Date(); // Create date object.
    var time_stamp = dt.getTime()/1000; // Get current minutes (converted to seconds).
    var total_time = end_time - Math.round(time_stamp); // Subtract current seconds from total seconds to get seconds remaining.
    var mins = Math.floor(total_time / 60); // Extract minutes from seconds remaining.
    var secs = total_time - (mins * 60); // Extract remainder seconds if any.
    if(secs < 10){secs = "0" + secs;} // Check if seconds are less than 10 and add a 0 in front.
    document.getElementById("txt").value = mins + ":" + secs; // Display remaining minutes and seconds.
    // Check for end of time, stop clock and display message.
    if(mins <= 0) {
        if(secs <= 0 || mins < 0) {
            clearInterval(ct);
            document.getElementById("txt").value = "0:00";
            submitForm();
        }
    }
}

//scoreboard//
var myScore = document.getElementById("b1");
myScore.onclick = function () {
    var newScore = document.getElementById("p1").innerHTML;
    var value = parseInt(newScore,10) + 500;
    document.getElementById("p1").innerHTML = value;
};
