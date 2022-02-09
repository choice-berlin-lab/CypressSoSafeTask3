Feature: Info-Text

    The Info-Text can be changed

    Scenario: For the Maximum page the title is changed
        Given I'm on the maximum page
        When I see a info-text
        Then The Info-Text is ending in "[Test-Edit]"