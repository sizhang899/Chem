// Basic structures and compounds (simplified)
const compounds = [
  { name: "methane", formula: "CH4", draw: drawMethane },
  { name: "ethanol", formula: "C2H5OH", draw: drawEthanol },
  { name: "propane", formula: "C3H8", draw: drawPropane },
  { name: "butanoic acid", formula: "C3H7COOH", draw: drawButanoicAcid }
];

function generateCompound() {
  // Select a random compound from the list
  const randomIndex = Math.floor(Math.random() * compounds.length);
  const selectedCompound = compounds[randomIndex];

  // Draw the selected compound on the canvas
  const canvas = document.getElementById("compoundCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
  selectedCompound.draw(ctx);

  // Store the correct answer
  document.getElementById("compoundCanvas").setAttribute("data-answer", selectedCompound.name);
}

function checkAnswer() {
  const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
  const correctAnswer = document.getElementById("compoundCanvas").getAttribute("data-answer").toLowerCase();

  const feedback = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect. Try again!";
    feedback.style.color = "red";
  }
}

// Drawing functions for basic structures
function drawMethane(ctx) {
  ctx.beginPath();
  ctx.arc(150, 100, 20, 0, 2 * Math.PI);
  ctx.fillText("C", 145, 105); // Carbon
  ctx.moveTo(150, 80);
  ctx.lineTo(150, 40); // H
  ctx.fillText("H", 145, 30);
  ctx.moveTo(170, 100);
  ctx.lineTo(210, 100); // H
  ctx.fillText("H", 220, 105);
  ctx.moveTo(150, 120);
  ctx.lineTo(150, 160); // H
  ctx.fillText("H", 145, 170);
  ctx.moveTo(130, 100);
  ctx.lineTo(90, 100); // H
  ctx.fillText("H", 80, 105);
  ctx.stroke();
}

function drawEthanol(ctx) {
  ctx.beginPath();
  ctx.moveTo(50, 100);
  ctx.lineTo(100, 100); // C-C
  ctx.fillText("C", 45, 95);
  ctx.fillText("C", 105, 95);
  ctx.moveTo(100, 100);
  ctx.lineTo(150, 100); // C-OH
  ctx.fillText("O", 145, 95);
  ctx.fillText("H", 155, 110);
  ctx.moveTo(50, 100);
  ctx.lineTo(50, 70); // H
  ctx.fillText("H", 45, 60);
  ctx.moveTo(50, 100);
  ctx.lineTo(20, 100); // H
  ctx.fillText("H", 5, 105);
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 70); // H
  ctx.fillText("H", 95, 60);
  ctx.stroke();
}

function drawPropane(ctx) {
  ctx.beginPath();
  ctx.moveTo(50, 100);
  ctx.lineTo(100, 100); // C-C
  ctx.fillText("C", 45, 95);
  ctx.fillText("C", 105, 95);
  ctx.moveTo(100, 100);
  ctx.lineTo(150, 100); // C-C
  ctx.fillText("C", 155, 95);
  ctx.moveTo(50, 100);
  ctx.lineTo(50, 70); // H
  ctx.fillText("H", 45, 60);
  ctx.moveTo(50, 100);
  ctx.lineTo(20, 100); // H
  ctx.fillText("H", 5, 105);
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 70); // H
  ctx.fillText("H", 95, 60);
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 70); // H
  ctx.fillText("H", 145, 60);
  ctx.stroke();
}

function drawButanoicAcid(ctx) {
  ctx.beginPath();
  ctx.moveTo(50, 100);
  ctx.lineTo(100, 100); // C-C
  ctx.fillText("C", 45, 95);
  ctx.fillText("C", 105, 95);
  ctx.lineTo(150, 100); // C-C
  ctx.fillText("C", 155, 95);
  ctx.lineTo(200, 100); // C=O
  ctx.fillText("O", 195, 95);
  ctx.moveTo(200, 100);
  ctx.lineTo(200, 70); // OH
  ctx.fillText("OH", 195, 60);
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 70); // H
  ctx.fillText("H", 145, 60);
  ctx.stroke();
}
