// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="game"><div class="team"><p class="name"></p><p class="score"></p></div><div class="team"><p class="name"></p><p class="score"></p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame('game').outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '');
});


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="team"><p class="name">name, score</p><p class="score"></p></div>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam('name, score').outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, '');
});
