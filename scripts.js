const flashcards = {
  motion: [
    { question: "Define speed.", answer: "Speed is the rate at which an object changes its distance over time." },
    { question: "How do you convert km/h to m/s?", answer: "To convert km/h to m/s, divide by 3.6." },
    { question: "What is average speed?", answer: "Average speed is the total distance traveled divided by the total time taken." }
  ],
  forces: [
    { question: "Define force.", answer: "A force is a push or pull acting on an object." },
    { question: "How does mass affect inertia?", answer: "Objects with greater mass have greater inertia, meaning they resist changes in motion more." }
  ],
  graphs: [
    { question: "What does the slope of a distance-time graph represent?", answer: "The slope represents the average speed of the object." },
    { question: "How do you calculate acceleration?", answer: "Acceleration = (final speed - initial speed) / time" }
  ],
  friction: [
    { question: "What is static friction?", answer: "Static friction is the force that resists the start of sliding motion between two surfaces." },
    { question: "Why is static friction stronger than sliding friction?", answer: "Because static friction must overcome the initial resistance to movement, while sliding friction only resists ongoing motion." }
  ],
  newton: [
    { question: "State Newton's First Law.", answer: "An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force." },
    { question: "What does Newton's Second Law state?", answer: "Acceleration is directly proportional to net force and inversely proportional to mass (F=ma)." }
  ],
  safety: [
    { question: "What is stopping distance?", answer: "Stopping distance is the sum of reaction distance and braking distance." },
    { question: "Name factors that affect braking distance.", answer: "Braking distance is affected by road conditions, tire quality, and brake efficiency." }
  ]
};

let currentCategory = 'motion';
let currentIndex = 0;

function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  displayFlashcard();
}

function displayFlashcard() {
  const flashcard = flashcards[currentCategory][currentIndex];
  document.getElementById("flashcard-question").textContent = flashcard.question;
  document.getElementById("flashcard-answer").textContent = flashcard.answer;
  document.getElementById("flashcard-answer").style.display = "none";
}

function flipFlashcard() {
  const answer = document.getElementById("flashcard-answer");
  answer.style.display = answer.style.display === "none" ? "block" : "none";
}

function nextFlashcard() {
  currentIndex = (currentIndex + 1) % flashcards[currentCategory].length;
  displayFlashcard();
}

// Initialize with the first flashcard
displayFlashcard();
