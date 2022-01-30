import cypress from 'cypress';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';

Given('I\'m on the maximum page', () => {
    LearningPage.visitMaximum();
});

Then('I see a start-explenation-button above the template', () => {
    //cy.get('#explanationButtonDefault').should('be.visible')
});

Then('I see a start-explenation-button below the template', () => {
    //cy.get('#explanationButtonDefault').should('be.visible')
});

When('I click on the start-explenation-button', () => {
   
});

Then('the template is scrolled to the top of the browser', () => {
   
});

Then('the explenation is started', () => {
   
});
