var questions = [
  {
    question: "What does HTML stand for?",
    id: 1,
    choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"],
    correctIndex: 1,
  },
  {
    question: "Which tag is used to link an external CSS file to an HTML document?",
    id: 2,
    choices: ["<css>", "<script>", "<link>", "<style>"],
    correctIndex: 2,
  },
  {
    question: "What is the correct order of the CSS box model from the innermost layer to the outermost layer?",
    id: 3,
    choices: [
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin",
      "Padding, Border, Margin, Content",
      "Content, Margin, Border, Padding",
    ],
    correctIndex: 3,
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    id: 4,
    choices: ["text-color", "color", "font-color", "text-style"],
    correctIndex: 1,
  },
  { question: "What is the correct syntax for referring to an ID in CSS?", id: 5, choices: [".myID", "#myID", "*myID", "@myID"], correctIndex: 1 },
  {
    question: "Which tag is used to define JavaScript within HTML?",
    id: 6,
    choices: ["<java>", "<script>", "<js>", "<javascript>"],
    correctIndex: 1,
  },
  {
    question: "Which function is used to print a message to the console in JavaScript?",
    id: 7,
    choices: ["log()", "display()", "print()", "console.log()"],
    correctIndex: 3,
  },
  {
    question: "Which of the following is NOT a JavaScript framework/library?",
    id: 8,
    choices: ["React", "Angular", "jQuery", "Sass"],
    correctIndex: 3,
  },
  {
    question: "What does CSS stand for?",
    id: 9,
    choices: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correctIndex: 0,
  },
  { question: "Which attribute is used in HTML to define inline styles?", id: 10, choices: ["styles", "design", "format", "style"], correctIndex: 3 },
  {
    question: "The CSS property 'display: none;' does what to an element?",
    id: 11,
    choices: [
      "Makes it invisible but still takes up space",
      "Hides the element completely and removes it from the layout",
      "Reduces the opacity of the element",
      "Enlarges the element to fill the screen",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the correct file extension for a JavaScript file?",
    id: 12,
    choices: [".java", ".js", ".javascript", ".script"],
    correctIndex: 1,
  },
  { question: "Which HTML tag is used for creating an unordered list?", id: 13, choices: ["<ol>", "<list>", "<ul>", "<li>"], correctIndex: 2 },
  { question: "Which of the following is a self-closing tag in HTML?", id: 14, choices: ["<div>", "<p>", "<img />", "<span>"], correctIndex: 2 },
  {
    question: "The CSS property 'font-weight' is used for:",
    id: 15,
    choices: ["Adjusting the font size", "Changing the font color", "Making the text bold or light", "Italicizing the text"],
    correctIndex: 2,
  },
  {
    question: "Which function is used to find the length of a string in JavaScript?",
    id: 16,
    choices: ["len()", "count()", "size()", "length()"],
    correctIndex: 3,
  },
  {
    question: "Which HTML attribute is used to define the alternative text for an image?",
    id: 17,
    choices: ["alt", "title", "src", "img-alt"],
    correctIndex: 0,
  },
  {
    question: "What does the 'href' attribute define in an anchor tag?",
    id: 18,
    choices: ["The heading of the link", "The target location of the link", "The style of the link", "The link's reference or URL"],
    correctIndex: 3,
  },
  {
    question: "Which of the following is used to include external JavaScript code in an HTML file?",
    id: 19,
    choices: ["<script>", "<javascript>", "<js>", "<link>"],
    correctIndex: 0,
  },
  {
    question: "Which CSS property is used to create space between elements on the page?",
    id: 20,
    choices: ["margin", "padding", "space", "gap"],
    correctIndex: 1,
  },
];

let time = 75;

var timer = document.querySelector("#timer");
let textInput = document.querySelector("#input");
var startTitle = document.querySelector("#start-title");
var startBtn = document.querySelector("#start-btn");
var startPrompt = document.querySelector("#start-prompt");

startBtn.addEventListener("click", function () {
  startPrompt.classList.add("hidden");
  startBtn.classList.add("hidden");
  startTitle.classList.add("hidden");

  setInterval(function () {
    if (time <= 0) {
    } else {
      time--;
      timer.textContent = "Time: " + time;
    }
  }, 1000);
});
