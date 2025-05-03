// Scroll Animation
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('visible');
    }
  });
});

// Quiz App
const quizData = [
  {
    question: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    answer: "<a>"
  },
  {
    question: "Which programming language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "How do you add a background color in CSS?",
    options: ["background-color", "color-background", "bgcolor", "backgroundColor"],
    answer: "background-color"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Mozilla", "Microsoft", "Oracle"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next');

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = '';

  current.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => {
      if (option === current.answer) {
        alert('Correct! 🎉');
      } else {
        alert('Oops! Wrong answer.');
      }
    };
    optionsEl.appendChild(button);
  });
}

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = '🎉 Quiz Completed!';
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
  }
});

loadQuestion();

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
document.getElementById('nextSlide').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});
document.getElementById('prev').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});

// Fetch Joke API
const getJokeBtn = document.getElementById('getJoke');
const jokeDiv = document.getElementById('joke');

getJokeBtn.addEventListener('click', async () => {
  jokeDiv.style.opacity = 0;
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  jokeDiv.textContent = `${data.setup} 😂 ${data.punchline}`;
  setTimeout(() => {
    jokeDiv.style.opacity = 1;
  }, 100);
});
