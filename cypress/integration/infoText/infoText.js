import { expect } from 'chai';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LearningPage from '../common/LearningPage';
let exampleData, infoText, infoTextLast;

//done it after case study

// beforeEach(() => {
//     cy.fixture('example').then(function(dataJson){
//         exampleData = dataJson;
//         return exampleData;
//     })
//   })

// Given ("I'm on the maximum page", ()=>{
//     LearningPage.visitMaximum();
// } )

// When ("I see a info-text", ()=>{

//     cy
//     .get('#title')
//     .should('be.visible')
// })

// Then ('The Info-Text is ending in "[Test-Edit]"', ()=>{

//     cy
//     .get('#title')
//     .then($word => {
//         infoText = $word.text()
//         infoText.split(" ");
//         infoTextLast = infoText[infoText -1];
//         // expect(infoTextLast.includes(exampleData.info)).to.be.true;  not possible
//         // expect(infoTextLast).to.contain(exampleData.info);   not possible
//         return infoTextLast;
//     })
//     .should('contain',exampleData.info)
// })



