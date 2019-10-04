Feature: Login

        Rules:
        1. Users must be able to enter their Username and Password then Login to Prefrence Manager using the Login button

Background: Given that the User has a registered account on Preference Manager
    Given The Username 'ABAKER' and Password 'Samsung123!' are valid

    Scenario: The User is Logged in and the Landing Page appears
        When A valid Username and Password is entered then the Login button is clicked
        Then The User is Logged in and the Landing Page appears

    Scenario Outline: The user logs in multiple times
        When a user logs in with password '<password>' and username '<username>'
        Examples:
            | username | password   |
            | ABAKER   | Samsung123!|