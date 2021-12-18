var readLineSync = require('readline-sync')
var chalk  = require('chalk')
var userName = readLineSync.question("What's your name? ")
var score = 0 
console.log("Welcome "+ userName + " to the Marvel quiz!!")
function play(question,answer){
  var userQuestion = (readLineSync.question(question))
  if(userQuestion === (answer)){
    console.log(chalk.green("You are right"))
    score = score + 1
  }
  else{
    console.log(chalk.red("You are wrong"))
    score = score - 1
  }
  console.log(chalk.blue("Your score is: ",score))
}
var questions = [{
   question:"What is the Real Name of Black Widow? ",
  answer:"Natasha Romanoff"
},
{
  question:"Who killed Tony's Parents? ",
  answer:"Bucky Banks"
},
{
  question:"Who snapped the infinity gauntlet to bring back humans? ",
  answer:"Hulk"
},
{
question:"Where did thanos killed gamora? ",
answer:"Vormir"
},
{
  question:"Which element did tony start create? ",
  answer:"Vibranium"
}
]
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}
console.log(chalk.cyan("your final score is: ",score))
