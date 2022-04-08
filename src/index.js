import { addScore, loadScores } from './modules/api.js';
import './styles/index.css';

const form = document.getElementById('leaderboard-form');
const refreshButton = document.getElementById('refresh');

loadScores();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore();
  form.reset();
});

refreshButton.addEventListener('click', () => {
  loadScores();
});