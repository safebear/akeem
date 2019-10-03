Feature: Login

Rules:
1. Users must be able to enter their Username and Password then Login to Prefrence Manager using the Login button

Background: Ensure User is able to Login
Given The Username and Password are valid
| Username | Password    |
| ABAKER   | Samsung123! |

Scenario: The User is Logged in and the Landing Page appears
When A valid Username and Password is entered then the Login button is clicked
Then The User is Logged in and the Landing Page appears