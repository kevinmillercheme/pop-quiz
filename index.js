let score = 0;

alert(`Welcome to the pop quiz! *Cue evil music*
Directions: Answer the questions to the best of your abilities to see your score. The answers will be revealed at the conclusion of the quiz. 75% is passing.`)

const inputQuestion1 = prompt(`Question 1: (Enter the number associated with your answer) 
Who's the best quarterback in the NFL? (HINT: the dev is a Steelers fan)
1. Sam Darnold
2. Aaron Rodgers (Answer)
3. Ka'imi Fairbairn
4. Drake Maye`)

// totally could've used a function for scoreCalc and scoreFunction, however I copy-pasted my question structure as theyre the same //

const answerQuestion1 = Number(inputQuestion1);
if (answerQuestion1 === 1) {
    scoreCalc = (score / 1)*100; 
    scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
    alert(`Great answer, he may be in the Super Bowl, but he isn't the best. \nScore: ${scoreTranslated}%`);
} else if (answerQuestion1 === 2) {
    score++;
    scoreCalc = (score / 1)*100;
    scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
    alert(`B-B-B-Bingo! You know ball. \nScore: ${scoreTranslated}%`);
} else if (answerQuestion1 === 3) {
    scoreCalc = (score / 1)*100;
    scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
    alert(`Bro... Really? \nScore: ${scoreTranslated}%`);
} else if (answerQuestion1 === 4) {
    scoreCalc = (score / 1)*100;
    scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
    alert(`This is the logical answer, though the hint tell you dev is delusional! \nScore: ${scoreTranslated}%`);
} else {
    alert("Enter a number 1 through 4.")
}

    const inputQuestion2 = prompt(`Question 2: (Enter the number associated with your answer) 
    Which is ACTUALLY America's sport?
    1. Football
    2. Basketball
    3. Baseball (Answer)
    4. Soccer`);

    const answerQuestion2 = Number(inputQuestion2);
    if (answerQuestion2 === 1) {
        scoreCalc = (score / 2)*100;
        scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
        alert(`This is whats considered Americas Sport, but its not. \nScore: ${scoreTranslated}%`);
    } else if (answerQuestion2 === 2) {
        scoreCalc = (score / 2)*100;
        scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
        alert(`Incorrect. The NBA has been declining in watchability as well in recent years (IMO) \nScore: ${scoreTranslated}%`);
    } else if (answerQuestion2 === 3) {
        score++;
        scoreCalc = (score / 2)*100;
        scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
        alert(`You got it! The best sport ever created. This is America's game. \nScore: ${scoreTranslated}%`);
    } else if (answerQuestion2 === 4) {
        scoreCalc = (score / 2)*100;
        scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
        alert(`I'd say this is the world's most popular sport. America, no. \nScore: ${scoreTranslated}%`);
    } else {
        alert("Enter a number 1 through 4.")
    }

        const inputQuestion3 = prompt(`Question 3: (Enter the number associated with your answer) 
        Most obscure NBA role player?
        1. Rondae Hollis-Jefferson (Answer)
        2. Mitch Richmond
        3. Michael Redd
        4. LeBron James`)

        const answerQuestion3 = Number(inputQuestion3);
        if (answerQuestion3 === 1) {
            score++;
            scoreCalc = (score / 3)*100;
            scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
            alert(`Brooklyn Net's legend. He's pretty obsure. Good choice! \nScore: ${scoreTranslated}%`);
        } else if (answerQuestion3 === 2) {
            scoreCalc = (score / 3)*100;
            scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
            alert(`Everyone knows Money Mitch. Nope! \nScore: ${scoreTranslated}%`);
        } else if (answerQuestion3 === 3) {
            scoreCalc = (score / 3)*100;
            scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
            alert(`Noooo! If you know ball you KNOW this guy had a beautiful lefty jumper \nScore: ${scoreTranslated}%`);
        } else if (answerQuestion3 === 4) {
            scoreCalc = (score / 3)*100;
            scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
            alert(`Funny. Cmon. Nope. \nScore: ${scoreTranslated}%`);
        } else {
            alert("Enter a number 1 through 4.")
        }

            const inputQuestion4 = prompt(`Question 4: (Enter the number associated with your answer) 
            Best coding bootcamp in the world?
            1. Fullstack Academy (Answer)
            2. I don't know, I haven't been to any others.
            3. top text
            4. bottom text`)

            const answerQuestion4 = Number(inputQuestion4);
            if (answerQuestion4 === 1) {
                score++;
                scoreCalc = (score / 4)*100;
                scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
                alert(`This is the only answer really. \nScore: ${scoreTranslated}%`);
            } else if (answerQuestion4 === 2) {
                scoreCalc = (score / 4)*100;
                scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
                alert(`Nope! \nScore: ${scoreTranslated}%`);
            } else if (answerQuestion4 === 3) {
                scoreCalc = (score / 4)*100;
                scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
                alert(`top text \nScore: ${scoreTranslated}%`);
            } else if (answerQuestion4 === 4) {
                scoreCalc = (score / 4)*100;
                scoreTranslated = Number.parseFloat(scoreCalc).toFixed(0);
                alert(`bottom text \nScore: ${scoreTranslated}%`);
            } else {
                alert("Enter a number 1 through 4.")
            }

            let finalScore = scoreTranslated;
            let updateHTML = document.getElementById("finalScore");
            updateHTML.innerHTML = `${finalScore}%`;

            if (score >= 3) {
                alert(`Congratulations! You passed the quiz with flying colors! \nScore: ${scoreTranslated}%`);
                resultMemo = document.getElementById("resultMemo");
                resultMemo.innerHTML = `Pass!`;
                resultMemo.style.color = "green";
            } else {
                alert(`Unfortunately, you did not pass the quiz. Better luck next time! \nScore: ${scoreTranslated}%`);
                resultMemo = document.getElementById("resultMemo");
                resultMemo.innerHTML = `Did Not Pass.`;
                resultMemo.style.color = "red";
            }