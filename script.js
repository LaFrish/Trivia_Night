
//popup
function popout(){
  $(document).ready(function() {

    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    var winH = $(window).height();
    var winW = $(window).width();

    $('#mask').css({'width':maskWidth,'height':maskHeight});
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow",0.9);

    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(2000);

    $('.window .close').click(function (e) {
      e.preventDefault();

      $('#mask').hide();
      $('.window').hide();
    });

    $('#mask').click(function () {
      $(this).hide();
      $('.window').hide();
    });
  });
}

function changeColor() {
  //change button color
  console.log('event called on click');
  if (this.classList.contains(correctAnswer)) {
    this.classList.add('btn-green');
  } else {
      this.classList.add('btn-red');
    }
}

function trivia(){
  var categories;
  var showCategories = document.getElementById("category");
  var showScore = document.getElementById("myScore");
  var question1 = $(".question");
  // var click = document.getElementByClass("answers");
  // var question1 = document.querySelector(".question");
  // var optionA1 = $("#optionA");
  var optionA1 = document.getElementById("optionA");
  var optionB1 = document.getElementById("optionB");
  var optionC1 = document.getElementById("optionC");
  var optionD1 = document.getElementById("optionD");
  var correctAnswer1 = document.querySelector(".correctAnswer");
  var incorrectAnswer1 = document.querySelector(".incorrectAnswer");
  var options = document.querySelectorAll(".answerOptions");
  console.log(options);
  // var arrayLength = question.length;
  //var playerselection = []
  i = 0;
  score = 0



  var selectCategory = function () {
    if (chosenCategory === categories[0]) {
      categoryName.innerHTML = "The Chosen Category Is Music";
    } else if (chosenCategory === categories[1]) {
      categoryName.innerHTML = "The Chosen Category Is Technology";
    } else if (chosenCategory === categories[2]) {
      categoryName.innerHTML = "The Chosen Category Is Celebrities";
    }
  }

  // round = ["ROUND 1 </br> TV & Movies", "ROUND 2 </br> Saturday Night </br> Live", "ROUND 3 </br> Celebrity </br> Gossip"];
  question = ["Which actor has a game based </br> off connecting any celebrity</br> to him in 6 degrees?", "For which role did </br> Leonardo DiCaprio </br> win an Oscar?", "Which movie has </br> won the </br> most Oscars?", "Which of these </br> actors has not </br> received an EGOT?", "Which movie </br> is not </br> based off a book?", "Who has hosted </br> Saturday Night Live </br> the most times?", "Who has been </br> banned from <br> SNL?", "Who has not </br> been an anchor on </br> Weekend Update?", "Who was not </br> part of the <br> original SNL cast?", "Who was been a SNL </br> cast member the longest?", "Who is singer Elle King's </br> famous father?", "Which of the following </br> fellas did not date </br> Taylor Swift?", "Who is Gwen Stefani's </br> current beau?", "What diet plan is Oprah </br> currently following?", "Who broke up with their </br> ex by ghosting them?","Game Over"];
  optionA = ["Kevin Bacon", "None of these options", "Titanic", "Kate Winslet", "Matrix", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn", "Thank You", "Thank You"];
  optionB = ["Tom Cruise", "Django Unchained", "The Godfather", "Audrey Hepburn","Mrs. Doubtfire", "Steve Martin", "Kanye West", "Jimmy Falon", "John Belushi", "Kenan Thompson", "Adam Sandler", "Harry Styles", "Gavin Rossdale", "Nutri-System", "Taylor Swift", "for playing!", "for playing!"];
  optionC = ["Samuel L. Jackson", "Titanic", "Citizen Kane", "Whoopi Goldberg", "Pitch Perfect", "John Goodman", "Miley Cryus", "Dan Aykroyd", "Chevy Chase", "Seth Meyers", "Joey King", "John Mayer", "Adam Levine", "The Atkins Diet Program", "John Mayer", "Want another chance?", "Want another chance?"];
  optionD = ["Morgan Freeman", "The Wolf of Wall Street", "Star Wars", "Tracy Jordan", "Die Hard", "Christopher Walken", "Paris Hilton", "Chevy Chase", "Dan Aykroyd", "Fred Armisen", "Elvis Presley", "Jake Gyllenhaal", "Chris Martin", "Jenny Craig", "Katy Perry", "Press to play again", "Press to play again"];
  correctAnswer = ["Kevin Bacon", "None of these options", "Titanic", "Kate Winslet", "Matrix", "Alec Baldwin", "Adrien Brody", "Adam Sandler", "Steve Martin", "Darrell Hammond", "Rob Schneider", "Dave Franco", "Blake Shelton", "Weight Watchers", "Charlize Theorn"];

  function questionAnswers(i){
    question1.html(question[i]);
    question1.attr("data-index", i);
    optionA1.innerHTML = optionA[i];
    optionB1.innerHTML = optionB[i];
    optionC1.innerHTML = optionC[i];
    optionD1.innerHTML = optionD[i];
  }

  optionA1.addEventListener("click", function () {
    if (this.classList.contains("correctAnswer")) {
      if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
        score++;
        alert("Good Job!");
        next();
      }
    }
  });
  optionB1.addEventListener("click", function () {
    // popout();
    alert("Sorry, you got it wrong!");
    next();
    if (this.classList.contains("correctAnswer")) {
      if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
        score++;
      }
    }
  });
  optionC1.addEventListener("click", function () {
    alert("Sorry, you got it wrong!");
    next();
    if (this.classList.contains("correctAnswer")) {
      if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
        score++;
      }
    }
  });
  optionD1.addEventListener("click", function () {
    alert("Sorry, you got it wrong!");
    next();
    if (this.classList.contains("correctAnswer")) {
      if (this.innerHTML == this.classList.contains("correctAnswer", [i])); {
        score++;
      }
    }
  });

  function next (){
    //  console.log(this.classList.contains("correctAnswer"));
    var index =parseInt( question1.attr("data-index"));
    // question1.dataset.index
    if (question.length == index) {
      alert("Game Over");
      $('.container').hide();
    } else {
      questionAnswers(1 + index);
    }
  }
  questionAnswers(i)


  // calculate score
  // function showScore(){
  // 	$('.score').append("Your score is" count + " out of 5");
  // }
}

popout()
trivia()
// showScore()
// gameOver()
