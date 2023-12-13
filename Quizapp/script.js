let questions = [
    {
        'question': "Wer hat HTML erfunden?",
        'answer_1': "Robbie Williams",
        'answer_2': "Lady Gaga",
        'answer_3': "Tim Berners-Lee",
        'answer_4': "Justin Bieber",
        'right_answer': 3

    },
    {
        'question': "",
        'answer_1': "",
        'answer_2': "",
        'answer_3': "",
        'answer_4': "",
        'right_answer': 3

    }, {
        'question': "",
        'answer_1': "",
        'answer_2': "",
        'answer_3': "",
        'answer_4': "",
        'right_answer': 3

    }, {
        'question': "",
        'answer_1': "",
        'answer_2': "",
        'answer_3': "",
        'answer_4': "",
        'right_answer': ""

    }, {
        'question': "",
        'answer_1': "",
        'answer_2': "",
        'answer_3': "",
        'answer_4': "",
        'right_answer': 3

    }, {
        'question': "",
        'answer_1': "",
        'answer_2': "",
        'answer_3': "",
        'answer_4': "",
        'right_answer': 3

    }
];

let currentQuestion = 0;


function init() {
    document.getElementById('fragenanzahl').innerHTML = questions.length;
    showquestion();
}


function showquestion() {

    let question = questions[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {

    let question = questions[currentQuestion];
    let selectesQuestionAnswer = selection.slice(-1);
    let answer = question['right_answer'];
    let rightanswer = `answer_${answer}`;



    if (selectesQuestionAnswer == answer) {
        //Richtige Antwort!
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }
    else{
        //Falsche Antwort!
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightanswer).parentNode.classList.add('bg-success');

    }

    document.getElementById('next-button').disabled = false;


}