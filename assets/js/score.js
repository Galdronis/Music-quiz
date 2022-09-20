const scoreElement = document.getElementById('scoreBoard')
var highScores = JSON.parse(localStorage.getItem("finalScore"))

scoreElement.innerHTML = highScores