import { Given, Then, When, setDefaultTimeout } from "cucumber";

//Importing Page Objects
import { LoginPage } from "../page-objects/loginPage";
import { LandingPage } from "../page-objects/landingPage";
import { isPending } from "q";

//Creating Page Objects
const loginPage: LoginPage = new LoginPage();
const landingPage: LandingPage = new LandingPage();

//Assertion - Telling Cucumber if the Test is a Pass or Fail
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60 * 1000);

Given("The Username {string} and Password {string} are valid", function (username, password) {

  this.usernameWorld = username;
  this.passwordWorld = password;

  this.actions.clear(loginPage.txtUsername)
  this.actions.clear(loginPage.txtPassword);
    
  this.actions.sendKeys(loginPage.txtUsername, this.usernameWorld);
  this.actions.sendKeys(loginPage.txtPassword, this.passwordWorld);

    return this.actions.click(loginPage.btnLogin);
  });

When("A valid Username and Password is entered then the Login button is clicked", function () {

  //this.actions.clear(loginPage.txtUsername);
  //this.actions.clear(loginPage.txtPassword);
    //this.actions.sendKeys(loginPage.txtUsername, this.usernameWorld)
    //this.actions.sendKeys(loginPage.txtPassword, this.passwordWorld)

    return this.actions.click(loginPage.btnLogin);
  });

Then("The User is Logged in and the Landing Page appears", function () {
    return "pending";
  });

//When('a user logs in with password {string} and username {string}', function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
//});
