const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'newGame',
    }),
  });
  return response.json();
};

const newGame = () => {
  window.addEventListener('load', async () => {
    const { result } = await createGame();
    const gameID = result.substr(14, 20);
    console.log(gameID);
  });
};

export default newGame;