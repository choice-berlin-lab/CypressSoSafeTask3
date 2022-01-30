import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';



Given ("I'm on the maximum page", ()=>{
    LearningPage.visitMinimum();
} )

When ("I get the Info-Text in the maxium page", ()=>{
    cy.get('#title').then(function(words){
        var n = words.split(" ");
        return n[n.lengh - 1];
    })
})
Then ('The Info-Text is ending in "[Test-Edit]"', ()=>{


})



