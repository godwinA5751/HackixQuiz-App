import { csc203Questions, csc202Questions, csc204Questions,
  csc206Questions, csc208Questions
 } from "./question.js";

const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const numbers = document.querySelector('.num');

let minute = 25;
let second = 0;
let intervalId = null;
let num = 1; // Current question number (1-based)

let randomQuestions = []; // Array to hold randomly selected questions
let currentQuestionIndex = 0; // Index of the current question (0-based)
let userAnswers = {}; // Object to store user's answers
let shuffledOptionsMap = {}; // Stores shuffled options per question index

//courses selection

const listOfCourses = document.querySelector('.courses-select');
const questionsSelect = document.querySelector('.question-count-select')

document.querySelector('.js-csc202').addEventListener('click', ()=>{
  listOfCourses.style.display = 'none';
  questionsSelect.style.display = 'block';
  // Randomly selects numQuestions from the questions array
  function getRandomQuestions(csc202Questions, numQuestions) {
    const randomQuestions = [];
    const questionsCopy = csc202Questions.slice();

    for (let i = 0; i < numQuestions; i++) {
      const randomIndex = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy.splice(randomIndex, 1)[0]);
    }

    return randomQuestions;
    }
  // Start quiz when user clicks "Start Quiz"
  document.getElementById("start-quiz").addEventListener("click", () => {
    const count = parseInt(document.getElementById("question-count").value, 10);
    randomQuestions = getRandomQuestions(csc202Questions, count);
    currentQuestionIndex = 0;
    userAnswers = {};
    shuffledOptionsMap = {}; // Reset shuffled options for new quiz
    num = 1;

    // Set timer based on question count
    if (count === 20) {
      minute = 10;
    } else if (count === 30) {
      minute = 15;
    } else if (count === 50) {
      minute = 25;
    } else {
      minute = 10; // fallback default
    }
    second = 0;

    // Reset timer and UI
    minutes.innerHTML = String(minute).padStart(2, '0');
    seconds.innerHTML = String(second).padStart(2, '0');
    numbers.innerHTML = num;
    document.querySelector('.question-count-select').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.scores').style.display = 'none';
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
    stopTimer();
    intervalId = null;
    startTimer();
  });
});

document.querySelector('.js-csc203').addEventListener('click', ()=>{
  listOfCourses.style.display = 'none';
  questionsSelect.style.display = 'block';
  // Randomly selects numQuestions from the questions array
  function getRandomQuestions(csc203Questions, numQuestions) {
    const randomQuestions = [];
    const questionsCopy = csc203Questions.slice();

    for (let i = 0; i < numQuestions; i++) {
      const randomIndex = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy.splice(randomIndex, 1)[0]);
    }

    return randomQuestions;
    }
  // Start quiz when user clicks "Start Quiz"
  document.getElementById("start-quiz").addEventListener("click", () => {
    const count = parseInt(document.getElementById("question-count").value, 10);
    randomQuestions = getRandomQuestions(csc203Questions, count);
    currentQuestionIndex = 0;
    userAnswers = {};
    shuffledOptionsMap = {}; // Reset shuffled options for new quiz
    num = 1;

    // Set timer based on question count
    if (count === 20) {
      minute = 10;
    } else if (count === 30) {
      minute = 15;
    } else if (count === 50) {
      minute = 25;
    } else {
      minute = 10; // fallback default
    }
    second = 0;

    // Reset timer and UI
    minutes.innerHTML = String(minute).padStart(2, '0');
    seconds.innerHTML = String(second).padStart(2, '0');
    numbers.innerHTML = num;
    document.querySelector('.question-count-select').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.scores').style.display = 'none';
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
    stopTimer();
    intervalId = null;
    startTimer();
  });
});

document.querySelector('.js-csc204').addEventListener('click', ()=>{
  listOfCourses.style.display = 'none';
  questionsSelect.style.display = 'block';
  // Randomly selects numQuestions from the questions array
  function getRandomQuestions(csc204Questions, numQuestions) {
    const randomQuestions = [];
    const questionsCopy = csc204Questions.slice();

    for (let i = 0; i < numQuestions; i++) {
      const randomIndex = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy.splice(randomIndex, 1)[0]);
    }

    return randomQuestions;
    }
  // Start quiz when user clicks "Start Quiz"
  document.getElementById("start-quiz").addEventListener("click", () => {
    const count = parseInt(document.getElementById("question-count").value, 10);
    randomQuestions = getRandomQuestions(csc204Questions, count);
    currentQuestionIndex = 0;
    userAnswers = {};
    shuffledOptionsMap = {}; // Reset shuffled options for new quiz
    num = 1;

    // Set timer based on question count
    if (count === 20) {
      minute = 10;
    } else if (count === 30) {
      minute = 15;
    } else if (count === 50) {
      minute = 25;
    } else {
      minute = 10; // fallback default
    }
    second = 0;

    // Reset timer and UI
    minutes.innerHTML = String(minute).padStart(2, '0');
    seconds.innerHTML = String(second).padStart(2, '0');
    numbers.innerHTML = num;
    document.querySelector('.question-count-select').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.scores').style.display = 'none';
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
    stopTimer();
    intervalId = null;
    startTimer();
  });
});

document.querySelector('.js-csc206').addEventListener('click', ()=>{
  listOfCourses.style.display = 'none';
  questionsSelect.style.display = 'block';
  // Randomly selects numQuestions from the questions array
  function getRandomQuestions(csc206Questions, numQuestions) {
    const randomQuestions = [];
    const questionsCopy = csc206Questions.slice();

    for (let i = 0; i < numQuestions; i++) {
      const randomIndex = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy.splice(randomIndex, 1)[0]);
    }

    return randomQuestions;
    }
  // Start quiz when user clicks "Start Quiz"
  document.getElementById("start-quiz").addEventListener("click", () => {
    const count = parseInt(document.getElementById("question-count").value, 10);
    randomQuestions = getRandomQuestions(csc206Questions, count);
    currentQuestionIndex = 0;
    userAnswers = {};
    shuffledOptionsMap = {}; // Reset shuffled options for new quiz
    num = 1;

    // Set timer based on question count
    if (count === 20) {
      minute = 10;
    } else if (count === 30) {
      minute = 15;
    } else if (count === 50) {
      minute = 25;
    } else {
      minute = 10; // fallback default
    }
    second = 0;

    // Reset timer and UI
    minutes.innerHTML = String(minute).padStart(2, '0');
    seconds.innerHTML = String(second).padStart(2, '0');
    numbers.innerHTML = num;
    document.querySelector('.question-count-select').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.scores').style.display = 'none';
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
    stopTimer();
    intervalId = null;
    startTimer();
  });
});

document.querySelector('.js-csc208').addEventListener('click', ()=>{
  listOfCourses.style.display = 'none';
  questionsSelect.style.display = 'block';
  // Randomly selects numQuestions from the questions array
  function getRandomQuestions(csc208Questions, numQuestions) {
    const randomQuestions = [];
    const questionsCopy = csc208Questions.slice();

    for (let i = 0; i < numQuestions; i++) {
      const randomIndex = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy.splice(randomIndex, 1)[0]);
    }

    return randomQuestions;
    }
  // Start quiz when user clicks "Start Quiz"
  document.getElementById("start-quiz").addEventListener("click", () => {
    const count = parseInt(document.getElementById("question-count").value, 10);
    randomQuestions = getRandomQuestions(csc208Questions, count);
    currentQuestionIndex = 0;
    userAnswers = {};
    shuffledOptionsMap = {}; // Reset shuffled options for new quiz
    num = 1;

    // Set timer based on question count
    if (count === 20) {
      minute = 10;
    } else if (count === 30) {
      minute = 15;
    } else if (count === 50) {
      minute = 25;
    } else {
      minute = 10; // fallback default
    }
    second = 0;

    // Reset timer and UI
    minutes.innerHTML = String(minute).padStart(2, '0');
    seconds.innerHTML = String(second).padStart(2, '0');
    numbers.innerHTML = num;
    document.querySelector('.question-count-select').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.scores').style.display = 'none';
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
    stopTimer();
    intervalId = null;
    startTimer();
  });
});



// --- Pagination rendering ---
// Renders the question navigation buttons (pagination)
function renderPagination() {
  const pagination = document.getElementById("question-pagination");
  if (!pagination) return;
  pagination.innerHTML = "";
  randomQuestions.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.textContent = idx + 1;
    btn.className = "pagination-btn";
    // Mark as answered if user has answered this question
    if (userAnswers[idx]) {
      btn.classList.add("answered");
    }
    // Highlight the current question
    if (idx === currentQuestionIndex) btn.classList.add("active");
    btn.addEventListener("click", () => {
      // Save current answer before switching
      const selectedOption = document.querySelector('input[name="option"]:checked');
      if (selectedOption) {
        userAnswers[currentQuestionIndex] = selectedOption.value;
      }
      // Switch to the selected question
      currentQuestionIndex = idx;
      num = idx + 1;
      numbers.innerHTML = num;
      displayQuestion();
      updateNavigationButtons();
      renderPagination();
    });
    pagination.appendChild(btn);
  });
}



// Starts the countdown timer
function startTimer() {
  intervalId = setInterval(() => {
    // Change timer color if 5 minutes or less remain
    const timerElement = document.querySelector('.timer');
    if (minute < 5 || (minute === 5 && second === 0)) {
      timerElement.classList.add('red');
    } else {
      timerElement.classList.remove('red');
    }

    // If time runs out, stop timer and auto-submit
    if (minute === 0 && second === 0) {
      stopTimer();
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
      handleSubmit(true); // Auto-submit when time is up, no confirmation
      return;
    }

    // Decrement time
    if (second === 0) {
      if (minute > 0) {
        minute--;
        second = 59;
      }
    } else {
      second--;
    }

    // Update timer display
    minutes.innerHTML = String(minute).padStart(2, '0');
    seconds.innerHTML = String(second).padStart(2, '0');
  }, 1000); // 1 second interval
}

// Stops the countdown timer
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// Displays the current question and its options
function displayQuestion() {
  const question = randomQuestions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  questionElement.textContent = question.question;
  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  // Only shuffle the first time this question is shown
  if (!shuffledOptionsMap[currentQuestionIndex]) {
    shuffledOptionsMap[currentQuestionIndex] = shuffleArray([...question.options]);
  }
  const shuffledOptions = shuffledOptionsMap[currentQuestionIndex];

  shuffledOptions.forEach((option) => {
    const optionElement = document.createElement("li");
    const label = document.createElement("label");
    label.style.cursor = "pointer";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    // Pre-select if user already answered
    if (userAnswers[currentQuestionIndex] === option) {
      radio.checked = true;
      optionElement.classList.add('selected');
    }

    // When clicking the li, select the radio and highlight
    optionElement.addEventListener("click", () => {
      radio.checked = true;
      // Remove .selected from all options
      optionsElement.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
      // Add .selected to the clicked option
      optionElement.classList.add('selected');
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(option));
    optionElement.appendChild(label);
    optionsElement.appendChild(optionElement);
  });
}

// Handles the "Next" button click
function handleNext() {
  // Save the selected answer if any
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption.value;
  }
  // Move to the next question if not at the end
  if (currentQuestionIndex < randomQuestions.length - 1) {
    currentQuestionIndex++;
    num++;
    numbers.innerHTML = num;
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
  }
}

// Handles the "Previous" button click
function handlePrevious() {
  // Move to the previous question if not at the start
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    num--;
    numbers.innerHTML = num;
    displayQuestion();
    updateNavigationButtons();
    renderPagination();
  }
}

// Updates the visibility of navigation buttons based on current question
function updateNavigationButtons() {
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const submitButton = document.getElementById("submit");

  // Hide "Previous" on first question
  if (currentQuestionIndex === 0) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "block";
  }

  // If all questions are answered, show Submit and hide Next
  if (allQuestionsAnswered()) {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else if (currentQuestionIndex === randomQuestions.length - 1) {
    // Show "Submit" on last question, otherwise show "Next"
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

// Handles quiz submission (manual or auto)
function handleSubmit(skipConfirm = false) {
  // Save the current answer if not already saved
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    userAnswers[currentQuestionIndex] = selectedOption.value;
  }

  // If auto-submit (timer or tab close), skip confirmation
  if (skipConfirm) {
    finishQuiz();
    return;
  }

  // Show custom modal for confirmation
  showConfirmModal();
}

// Show the custom confirmation modal
function showConfirmModal() {
  const modal = document.getElementById('confirm-modal');
  modal.style.display = 'block';

  // Yes button: submit and show score
  document.getElementById('confirm-yes').onclick = function() {
    modal.style.display = 'none';
    handleSubmit(true); // Only this!
  };

  // No button: close modal, do nothing
  document.getElementById('confirm-no').onclick = function() {
    modal.style.display = 'none';
  };
}

// Actually finish and display the quiz score
function finishQuiz() {
  stopTimer();
  const score = calculateScore();
  document.querySelector('.scores').style.display = 'block';
  document.querySelector('.container').style.display = 'none';
  displayScore(score);
  displayQuestionsAndAnswers();
}

// Calculates the user's score (2 points per correct answer)
function calculateScore() {
  let score = 0;
  randomQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correctAnswer) {
      score += 2;
    }
  });
  return score;
}

// Displays the user's score
function displayScore(score) {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Your score is ${score} out of ${randomQuestions.length * 2}`;
}

// Shows all questions, options, user's answer, and correct answer after submission
function displayQuestionsAndAnswers() {
  const questionsAndAnswersElement = document.getElementById("questions-and-answers");
  questionsAndAnswersElement.innerHTML = "";
  randomQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "review-question-block";
    questionElement.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}`;

    // List all options, highlight user's answer and correct answer
    const optionsList = document.createElement("ul");
    optionsList.className = "review-options";
    question.options.forEach(option => {
      const optionItem = document.createElement("li");
      optionItem.textContent = option;

      // Always highlight the correct answer
      if (option === question.correctAnswer) {
        optionItem.classList.add("correct-answer");
      }
      // If user answered this option, highlight accordingly
      if (userAnswers[index] === option) {
        if (option === question.correctAnswer) {
          optionItem.classList.add("user-correct");
        } else {
          optionItem.classList.add("user-wrong");
        }
      }
      optionsList.appendChild(optionItem);
    });

    questionElement.appendChild(optionsList);
    questionsAndAnswersElement.appendChild(questionElement);
  });
}

// --- Quiz setup based on user selection ---

// Hide quiz and score sections initially
document.querySelector('.container').style.display = 'none';
document.querySelector('.scores').style.display = 'none';



// "Next" button event
document.getElementById("next").addEventListener("click", () => {
  handleNext();
  if (intervalId === null) {
    startTimer();
  }
});

// "Previous" button event
document.getElementById("previous").addEventListener("click", () => {
  handlePrevious();
});

// "Submit" button event
document.getElementById("submit").addEventListener("click", () =>{
  showConfirmModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'n') {
    handleNext();
    if (intervalId === null) {
      startTimer();
    }
  } else if (event.key === 'p') {
    handlePrevious();
  }
});

// Auto-submit and show score if user leaves the page or switches tab
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && document.querySelector('.container').style.display === 'block') {
    stopTimer();
    const score = calculateScore();
    document.querySelector('.scores').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
    displayScore(score);
    displayQuestionsAndAnswers();
  }
});

// Also handle page unload (refresh/close)
window.addEventListener('beforeunload', (e) => {
  if (document.querySelector('.container').style.display === 'block') {
    stopTimer();
    const score = calculateScore();
    document.querySelector('.scores').style.display = 'block';
    document.querySelector('.container').style.display = 'none';
    displayScore(score);
    displayQuestionsAndAnswers();
    // Optionally show a warning dialog:
    // e.preventDefault();
    // e.returnValue = '';
  }
});

// Checks if all questions have been answered
function allQuestionsAnswered() {
  return randomQuestions.length > 0 && randomQuestions.every((_, idx) => userAnswers[idx]);
}

// Fisher-Yates shuffle for arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// take user back to the landing page
document.querySelector('.render').addEventListener('click', () => {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.scores').style.display = 'none';
  document.querySelector('.courses-select').style.display = 'block';
});