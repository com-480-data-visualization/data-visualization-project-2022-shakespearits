var myQuestions = [
    {
      question: "William Shakespeare mainly wrote which kind of poem?",
      answers: {
        a: 'Limerick',
        b: 'Epic',
        c: 'Sonnet'
      },
      correctAnswer: 'c'
    },
    {
        question: "How many plays did Shakespeare write?",
        answers: {
          a: '29',
          b: '39',
          c: '49'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the longest play of Shakespeare, with over 4,000 lines?",
        answers: {
          a: 'Hamlet',
          b: 'Macbeth',
          c: 'Romeo and Juliet'
        },
        correctAnswer: 'a'
    },
    {
        question: "How old was Shakespeare when he died?",
        answers: {
          a: '42',
          b: '52',
          c: '62'
        },
        correctAnswer: 'b'
    },
    {
        question: "In Shakespeare’s plays, how many times does a character commit suicide?",
        answers: {
          a: '5',
          b: '8',
          c: '13'
        },
        correctAnswer: 'c'
    },
    {
        question: "The tragedy Hamlet is set in the Kronborg Castle in which country?",
        answers: {
          a: 'Denmark',
          b: 'Germany',
          c: 'Sweden'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which kind of play is Romeo and Juliet?",
        answers: {
          a: 'Tragedy',
          b: 'History',
          c: 'Monologue'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the age of Juliet in Romeo and Juliet?",
        answers: {
          a: '13',
          b: '16',
          c: '19'
        },
        correctAnswer: 'a'
    },
    {
        question: " The play Romeo and Juliet is set in which Italian city?",
        answers: {
          a: 'Florence',
          b: 'Napoli',
          c: 'Verona'
        },
        correctAnswer: 'c'
    },
    {
      question: "Plays by Shakespeare can be divided into three categories: tragedy, comedy, and …",
      answers: {
        a: 'Music',
        b: 'Epic',
        c: 'History'
      },
      correctAnswer: 'c'
    },
    {
      question: "Which of the following is known as the Scottish play?",
      answers: {
        a: 'King Lear',
        b: 'Othello',
        c: 'Macbeth'
      },
      correctAnswer: 'c'
    },
    {
      question: "How many children did William Shakespeare have??",
      answers: {
        a: '3',
        b: '4',
        c: '5'
      },
      correctAnswer: 'a'
    },
    {
      question: "The plot of “Macbeth” was inspired by which historical event?",
      answers: {
        a: 'Wars of the Roses',
        b: 'The Gunpowder Plot',
        c: 'The Black Death'
      },
      correctAnswer: 'b'
    },
    {
      question: "The words “to be or not to be” is made by which fictional character in a Shakespeare’s play?",
      answers: {
        a: 'Hamlet',
        b: 'Macbeth',
        c: 'Juliet Capulet'
      },
      correctAnswer: 'a'
    },
    {
      question: "Which of the following lines was not written by William Shakespeare? (If you've got this one your're an expert!)",
      answers: {
        a: 'If music the be the food of love, play on',
        b: 'All that glitters is not gold',
        c: 'Hell hath no fury like a woman scorned'
      },
      correctAnswer: 'c'
    }

]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'rgb(24, 171, 21)';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'rgb(218, 25, 70)';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(questions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}