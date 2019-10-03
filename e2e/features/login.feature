Feature: Login

        Rules:
        1. Users must be able to enter their Username and Password then Login to Prefrence Manager using the Login button

        # Background: Ensure User is able to Login
        # Given The Username and Password are valid
        # | Username | Password    |
        # | ABAKER   | Samsung123! |

Background: User is valid
    Given The Username 'bob' and Password 'password123' are valid

    @runThis
    Scenario: The User is Logged in and the Landing Page appears
        When A valid Username and Password is entered then the Login button is clicked
        Then The User is Logged in and the Landing Page appears

    Scenario Outline: The user logs in multiple times
        When a user logs in with password '<password>' and username '<username>'
        Examples:
            | username | password |
            | bob1     | pass1    |
            | bob2     | pass2    |