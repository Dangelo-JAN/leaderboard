const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const leaderBoard = document.getElementById('leaderboard');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/enuSmmGLNQXzHU49kR78/scores/';

const createDiv = (scores) => {
  leaderBoard.innerHTML = '';
  const sortedScores = scores.sort((a, b) => b.score - a.score);
  sortedScores.forEach((score) => {
    const scoreContainer = `
      <div class="score">
        <p class="score-text">${score.user}: ${score.score}</p>
      </div>
    `;
    leaderBoard.innerHTML += scoreContainer;
  });
};

// Scores
const getScores = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  return scores.result;
};

const addScore = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: inputName.value,
      score: inputScore.value,
    }),
  });

  const status = await response.json();
  return status;
};

const loadScores = () => {
  getScores().then((scores) => {
    createDiv(scores);
  });
};

export { addScore, loadScores };