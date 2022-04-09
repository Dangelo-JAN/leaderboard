const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const leaderBoard = document.getElementById('leaderboard');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zqq0RWTogfgNa3CT4inU/scores/';

const createDiv = (scores) => {
  leaderBoard.innerHTML = '';
  const sortedScores = scores.sort((a, b) => b.score - a.score);
  sortedScores.forEach((score) => {
    const scoreContainer = `
      <li class="score-text">${score.user}: ${score.score}</li>
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
  const response = fetch(url, {
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