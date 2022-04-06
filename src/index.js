import tableScores from './modules/tablescore.js';
import './styles/index.css';

const containerLeaderboard = document.getElementById('leaderboard');

const leaderBoard = () => {
  tableScores.forEach((score) => {
    const scoreRow = document.createElement('p');
    containerLeaderboard.appendChild(scoreRow);
    scoreRow.textContent = `${score.name}: ${score.score}`;
  });
};

leaderBoard();