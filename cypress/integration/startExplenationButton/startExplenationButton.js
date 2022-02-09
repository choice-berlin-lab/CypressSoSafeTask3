import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';

Given('I\'m on the maximum page', () => {
    LearningPage.visitMaximum();
});

//done it after case study

// Then('I see a start-explenation-button above the template', () => {
//     cy.get('#explanationButtonDefault').should('be.visible')
// });

// Then('I see a start-explenation-button below the template', () => {
//     cy.get('#explanationButtonDefault2').should('be.visible')
// });

// When('I click on the start-explenation-button', () => {
//     cy.get('#explanationButtonDefault').click()
// });

// Then('the template is scrolled to the top of the browser', () => {
//    cy.get('#stepByStep').topIsWithinViewport('.guide')
// });

// Then('the explenation is started', () => {
//    cy.get('.animated').should('be.visible')
// });

