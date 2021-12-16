import { 
    logout, 
    checkAuth,
    getGames,
    createGame,
} from '../fetch-utils.js';
import { renderGame, renderTeam } from '../render-utils.js';

const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');
const logoutButton = document.getElementById('logout');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

checkAuth();

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameForm.addEventListener('submit', (e) => {
    // don't forget to prevent the default form behavior!
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(nameForm);
    // set the state to this data from the form
    name1 = data.get('name-1');
    name2 = data.get('name-2');
    score1 = data.get('score-1');
    score2 = data.get('score-2');
    // reset the form values
    nameForm.reset();
    // display updated data in the current game div
    displayCurrentGameEl();
});


teamOneAddButton.addEventListener('click', () => {
    // increment the current state for team one's score
    score1++;
    // display updated data in the current game div
    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    // increment the current state for team two's score
    score2++;
    // display updated data in the current game div
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    // decrement the current state for team one's score
    score1--;
    // display updated data in the current game div
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    // decrement the current state for team two's score
    score2--;
    // display updated data in the current game div
    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', async() => {
    
    // create a new game using the current game state
    const newGame = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2,
    };
    // re-fetch the games to get the updated state
    
    // reassign the past games state to the re-fetched, updated games
    
    displayAllGames();
    
    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;

    displayCurrentGameEl();
});

logoutButton.addEventListener('click', () => {
    logout();
});

 // on load . . .
window.addEventListener('load', async() => {
    // fetch all games
    // check if there are any
    // if there are, set those as the initial state of pastGames
    // then display all the games (hint: call displayAllGames())
     displayAllGames();
});


function displayCurrentGameEl() {
    // clear out the current game div
    currentGameEl.textContent = '';
    // change the label to show team one's name;
    teamOneLabel.textContent = name1;
    // change the label to show team two's name;
    teamTwoLabel.textContent = name2;
    // call the render game function to create a game element
    for (let game of games) {
        const gameEl = renderGame(game);
        
        currentGameEl.append(gameEl);
    }
    // append the element to the cleared out current game div
}


function displayAllGames() {
    // clear out the past games list in the DOM
    pastGamesEl.textContent = '';
    // fetch and loop through the past games
    window.addEventListener('load', async() => {
        for (let game of games) {
            const newGames = renderTeam(game);
            pastGamesEl.append(newGames);
        }
    });
    // render and append a past game for each past game in state
}


displayCurrentGameEl();
