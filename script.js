document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {   
            id: 1,
            question: 'Обчисліть:',
            src: './images/1.jpg',
            answers: [
                { text: 'a) 40', correct: false },
                { text: 'b) 20', correct: false },
                { text: 'c) 80', correct: true },
                { text: 'd) 100', correct: false },
                { text: 'e) 1', correct: false }
            ],
            discrimination: 1.075,
            difficulty: -1.7953
        },
        {   id: 9,
            question: 'Обчисліть:',
            src: './images/9.jpg',
            answers: [
                { text: 'a) log \u2083 52', correct: false },
                { text: 'b) 3', correct: true },
                { text: 'c) 9', correct: false },
                { text: 'd) 24', correct: false },
                { text: 'e) 27', correct: false }
            ],
            discrimination: 0.5842,
            difficulty: -2.2193
        },
        {   id: 11,
            question: 'Обчисліть:',
            src: './images/11.jpg',
            answers: [
                { text: 'a) - 1/4', correct: true },
                { text: 'b) -1/2', correct: false },
                { text: 'c) -2', correct: false },
                { text: 'd) 1/2', correct: false },
                { text: 'e) 1/4', correct: false }
            ],
            discrimination: 2.5531,
            difficulty: -0.8757
        },
        {   id: 31,
            question: 'Розв’яжіть нерівність:',
            src: './images/31.jpg',
            answers: [
                { text: 'a) (1; +\u221E)', correct: true },
                { text: 'b) (-1; +\u221E)', correct: false },
                { text: 'c) [-1; +\u221E)', correct: false },
                { text: 'd) [1; +\u221E)', correct: false },
                { text: 'e) (2; +\u221E)', correct: false }
            ],
            discrimination: 1.8221,
            difficulty: 0.0401
        },
        {   id: 24,
            question: 'Розв’яжіть рівняння',
            src: './images/24.jpg',
            answers: [
                { text: 'a) 3; 2', correct: false },
                { text: 'b) 2; 9', correct: false },
                { text: 'c) 2; -1', correct: false },
                { text: 'd) 3, 1', correct: false },
                { text: 'e) інше', correct: true }
            ],
            discrimination: 2.0659,
            difficulty: 0.6611
        },
        {   id: 40,
            question: 'Розв’яжіть рівняння:',
            src: './images/40.jpg',
            answers: [
                { text: 'a) -3', correct: false },
                { text: 'b) -2', correct: false },
                { text: 'c) -1.5', correct: true },
                { text: 'd) 1.5', correct: false },
                { text: 'e) 2', correct: false }
            ],
            discrimination: 2.4627,
            difficulty: -0.8852
        },
        {   id: 38,
            question: 'Розв’яжіть рівняння. Отриманий корінь рівняння округліть до десятих.',
            src: './images/38.jpg',
            answers: [
                { text: 'a) 0.2', correct: false },
                { text: 'b) 0.29', correct: false },
                { text: 'c) 0.3', correct: true },
                { text: 'd) 0.4', correct: false },
                { text: 'e) 3.5', correct: false }
            ],
            discrimination: 1.5313,
            difficulty: 0.0511
        },
        {   id: 5,
            question: 'Обчисліть:',
            src: './images/5.jpg',
            answers: [
                { text: 'a) 1/2', correct: false },
                { text: 'b) 4/3', correct: true },
                { text: 'c) 1', correct: false },
                { text: 'd) 8', correct: false },
                { text: 'e) 12', correct: false }
            ],
            discrimination: 2.6382,
            difficulty: -1.8614
        },
        {   id: 30,
            question: 'Розв’яжіть рівняння:',
            src: './images/30.jpg',
            answers: [
                { text: 'a) 20', correct: true },
                { text: 'b) 2', correct: false },
                { text: 'c) 10', correct: false },
                { text: 'd) lg2', correct: false },
                { text: 'e) ln2', correct: false }
            ],
            discrimination: 1.9782,
            difficulty: -0.9511
        },
        {   id: 32,
            question: 'Розв’яжіть нерівність:',
            src: './images/32.jpg',
            answers: [
                { text: 'a) (5; +\u221E)', correct: true },
                { text: 'b) [5; +\u221E)', correct: false },
                { text: 'c) [0, 5]', correct: false },
                { text: 'd) (-5; 5)', correct: false },
                { text: 'e) (-\u221E; 0)', correct: false }
            ],
            discrimination: 2.8884,
            difficulty: -1.2893
        },
        {   id: 35,
            question: 'Розв’яжіть нерівність:',
            src: './images/35.jpg',
            answers: [
                { text: 'a) (-\u221E; log\u20896)', correct: false },
                { text: 'b) (-\u221E; log\u20823)', correct: false },
                { text: 'c) (-\u221E; 2)', correct: false },
                { text: 'd) (-\u221E; 1)', correct: false },
                { text: 'e) (-\u221E; log\u20832)', correct: true }
            ],
            discrimination: 2.6160,
            difficulty: 0.2895
        },
        {   id: 36,
            question: 'Розв’яжіть нерівність:',
            src: './images/36.jpg',
            answers: [
                { text: 'a) (-\u221E; -3)', correct: false },
                { text: 'b) (-\u221E; -2)', correct: false },
                { text: 'c) (-3; +\u221E)', correct: true },
                { text: 'd) (-2; +\u221E)', correct: false },
                { text: 'e) (1; +\u221E)', correct: false }
            ],
            discrimination: 2.2566,
            difficulty: -0.5507
        },
        {   id: 22,
            question: 'Розв’яжіть рівняння:',
            src: './images/22.jpg',
            answers: [
                { text: 'a) -5; 2', correct: false },
                { text: 'b) -2; 5', correct: true },
                { text: 'c) -0; 3', correct: false },
                { text: 'd) 1; 5', correct: false },
                { text: 'e) -2; -1', correct: false }
            ],
            discrimination: -0.5941,
            difficulty: 1.8875
        },
        {   id: 27,
            question: 'Розв’яжіть нерівність:',
            src: './images/27.jpg',
            answers: [
                { text: 'a) -3; 2', correct: true },
                { text: 'b) 2; 3', correct: false },
                { text: 'c) -2; 3', correct: false },
                { text: 'd) -3; -2', correct: false },
                { text: 'e) 0; 1', correct: false }
            ],
            discrimination: 2.4953,
            difficulty: -1.0900

        },
        {   id: 7,
            question: 'Обчисліть:',
            src: './images/7.jpg',
            answers: [
                { text: 'a) 5', correct: false },
                { text: 'b) 6', correct: false },
                { text: 'c) 10', correct: false },
                { text: 'd) 25', correct: true },
                { text: 'e) 36', correct: false }
            ],
            discrimination: 1.9319,
            difficulty: -1.6749
        },
        {   id: 39,
            question: 'Укажіть число, що є коренем рівняння:',
            src: './images/39.jpg',
            answers: [
                { text: 'a) 7', correct: false },
                { text: 'b) 4', correct: true },
                { text: 'c) 3', correct: false },
                { text: 'd) 2', correct: false },
                { text: 'e) 1', correct: false }
            ],
            discrimination: 2.6370,
            difficulty: -1.5654
        },
        {   id: 33,
            question: 'Розв’яжіть нерівність:',
            src: './images/33.jpg',
            answers: [
                { text: 'a) (6; +\u221E)', correct: true },
                { text: 'b) [6; +\u221E)', correct: false },
                { text: 'c) (2,5; 6)', correct: false },
                { text: 'd) [2,5; 6]', correct: false },
                { text: 'e) [0; 5]', correct: false }
            ],
            discrimination: 2.6159,
            difficulty: -0.6829
        },
        {   id: 21,
            question: 'Розв’язати рівняння:',
            src: './images/21.jpg',
            answers: [
                { text: 'a) -5', correct: false },
                { text: 'b) -8', correct: false },
                { text: 'c) -12', correct: true },
                { text: 'd) 2', correct: false },
                { text: 'e) 0', correct: false }
            ],
            discrimination: 1.6244,
            difficulty: -1.2454
        },
        {   id: 17,
            question: 'Розв’яжіть рівняння:',
            src: './images/17.jpg',
            answers: [
                { text: 'a) -4', correct: false },
                { text: 'b) 4', correct: true },
                { text: 'c) 3', correct: false },
                { text: 'd) -3', correct: false },
                { text: 'e) розвязків немає', correct: false }
            ],
            discrimination: 2.7811,
            difficulty: -1.8468
        },
        {   id: 15,
            question: 'Скоротити дріб:',
            src: './images/15.jpg',
            answers: [
                { text: 'a) 2', correct: true },
                { text: 'b) -2', correct: false },
                { text: 'c) 15', correct: false },
                { text: 'd) -15', correct: false },
                { text: 'e) 4', correct: false }
            ],
            discrimination: 1.9323,
            difficulty: -0.9590
        }
    ];

    const questionElement = document.getElementById('question');
    const imageElement = document.getElementById('image');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');

    const learningRate = 0.01; // Learning rate
    const maxIterations = 100; // Maximum number of iterations
    const tolerance = 0.001; // Tolerance for stopping

    let answersObject = [];
    let studentTheta = -2.2193; // Initial value of theta
    let summInfAllAnswerdQuestion = 0; // Summ of all Fisher information
    let afterAswerResult // Answer on qustion : true || false 
    let questionObject = nextQuestionId(questions, studentTheta, answersObject); // model of question
    let currentQuestionIndex = findQuestionIndexById(questions, questionObject.id); // index of question


    //Initialize the test by displaying the first question.
    function startTest() {
        showQuestion(questions[currentQuestionIndex]);
    }

    //Find the index of a question based on its ID
    function findQuestionIndexById(questions, id) {
        return questions.findIndex(question => question.id === id);
    }

    // Display a question and its possible answers on the webpage
    function showQuestion(question) {
        resetState();
        questionElement.innerText = question.question;
        if (question.src) {
            imageElement.src = question.src;
            imageElement.style.display = 'block';
        } else {
            imageElement.style.display = 'none';
        }
        question.answers.forEach((answer, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `answer${index}`;
            input.name = 'answer';
            input.value = answer.correct;
            input.classList.add('radio');

            const label = document.createElement('label');
            label.htmlFor = `answer${index}`;
            label.innerText = answer.text;

            answerDiv.appendChild(input);
            answerDiv.appendChild(label);
            answerButtonsElement.appendChild(answerDiv);
        });
    }

    //Clear previous answers from the DOM.
    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    //Determine if the selected answer is correct.
    function answerResult() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      
        if (!selectedAnswer) return;
        
        const result = selectedAnswer.value === 'true';
        console.log('question result', result);

        return result;

    } 
    
    //Check if a question has already been answered
    function isQestionAlreadyUsed (question, answersObject) {
        let result = false;
    
        answersObject.forEach(element => {
            if (element.id === question.id) {
                result = true;
            }
        });
    
        return result;
    }
    
    //Convert the theta value to a mark out of 100.
    function convertThetaToMark(theta) {
        const min = -3.92;
        const absTheta = Math.abs(theta - min);
    
        return Math.round((100 * absTheta) / 6.106);
    }
    
    //Decide whether to stop the test based on Fisher information.
    function shouldWeStopTesting (summInfAllAnswerdQuestion, thisQuestionFisher) {
        let standart = 1 / Math.sqrt(summInfAllAnswerdQuestion);

        console.log('shouldWeStopTesting curent value  = ', standart);

        return standart < 0.352 || thisQuestionFisher < 0.1
    }

    //Optimize the student's ability estimate (theta) using gradient ascent.
    function gradientAscent(gradient, initialTheta, learningRate, maxIterations, tolerance, answersObject) {
        let currentTheta = initialTheta;
        let valueChange = Infinity;
        let iterations = 0;
        
        while (valueChange > tolerance && iterations < maxIterations) {
            const gradientValue = gradient(answersObject, currentTheta);
            const newTheta = currentTheta + learningRate * gradientValue;
            valueChange = Math.abs(newTheta - currentTheta);
            currentTheta = newTheta;
            iterations++;
        }

        return currentTheta;
    }

    //Calculate the gradient of the log-likelihood for the current theta.
    function gradient(answersObject, studentTheta) { 
        let result = 0;
        
        answersObject.forEach(answer => {
            result = result + answer.discrimination * (answer.answer - 1 / (1 + Math.exp(-answer.discrimination * (studentTheta - answer.difficulty))))
        });       
        
        return result
    }


    // Select the most relevant question based on the current theta.
    function nextQuestionId(questions, studentTheta, answersObject) {
        let mostRelevantQuestionFisher = -1;
        let mostSuitQustionId;
        let probabilityRight;
        let questionDiscrimination
        let questionDifficulty

        for (let index = 0; index < questions.length; index++) {
            const question = questions[index];

            if (!isQestionAlreadyUsed(question, answersObject)) {
                
                let probabilityOfRightAnswer = 1 / (1 + Math.exp(-question.discrimination * (studentTheta - question.difficulty)));
                let probabilityOfWrongAnswer = 1 - probabilityOfRightAnswer;
    
                curentRelevantQuestionFisher = question.discrimination * question.discrimination * probabilityOfRightAnswer * probabilityOfWrongAnswer;
                
                if (curentRelevantQuestionFisher > mostRelevantQuestionFisher) {
                    mostRelevantQuestionFisher = curentRelevantQuestionFisher;
                    mostSuitQustionId = question.id;
                    probabilityRight = probabilityOfRightAnswer;
                    questionDiscrimination = question.discrimination;
                    questionDifficulty =  question.difficulty;       
                }            
            }      
        }

        return {
            id: mostSuitQustionId,
            probabilityRight: probabilityRight,
            questionDiscrimination: questionDiscrimination,
            questionDifficulty: questionDifficulty,
            thisQuestionFisher: mostRelevantQuestionFisher
        }
    }

    // Handle the click event for the "Next" button, processing the current answer, updating theta, checking if the test should stop, and loading the next question.
    nextButton.addEventListener('click', () => {
        console.log('test');

        afterAswerResult = answerResult();
        answersObject.push({
            discrimination : questionObject.questionDiscrimination,
            difficulty : questionObject.questionDifficulty,
            answer: Number(afterAswerResult),
            id: questionObject.id
        })

        console.log(' questionObject id',  questionObject.id);
        studentTheta = gradientAscent(gradient, studentTheta, learningRate, maxIterations, tolerance, answersObject);

        console.log('new teta', studentTheta);
        console.log('questionObject.thisQuestionFisher', questionObject.thisQuestionFisher);

        summInfAllAnswerdQuestion = summInfAllAnswerdQuestion +  questionObject.thisQuestionFisher;

        console.log('summInfAllAnswerdQuestion', summInfAllAnswerdQuestion);
        
        if (shouldWeStopTesting(summInfAllAnswerdQuestion, questionObject.thisQuestionFisher)) {
            let result = convertThetaToMark(studentTheta)
            alert(`Test finished! Your result from 1-100  is  ${result}, and your theta is ${studentTheta.toFixed(2)}`);
        }

        questionObject = nextQuestionId(questions, studentTheta, answersObject);
        currentQuestionIndex = findQuestionIndexById(questions, questionObject.id);
        showQuestion(questions[currentQuestionIndex]);
    });

    startTest();
});
  

