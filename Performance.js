// After quiz completion
let scores = JSON.parse(localStorage.getItem("scores")) || [];
scores.push(currentScore);
localStorage.setItem("scores", JSON.stringify(scores));
