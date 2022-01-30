Feature: Info-Text

    The Info-Text can be changed

    Scenario: For the Maximum page the title is changed
        Given I'm on the maximum page
        When I get the Info-Text in the maxium page
        Then The Info-Text is ending in "[Test-Edit]"