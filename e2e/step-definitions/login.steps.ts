import { Given, Then, When, setDefaultTimeout } from "cucumber";

//Importing Page Objects
import { LoginPage } from "../page-objects/loginPage";
import { LandingPage } from "../page-objects/landingPage";

//Creating Page Objects
const loginPage: LoginPage = new LoginPage();
const landingPage: LandingPage = new LandingPage();


//Assertion - Telling Cucumber if the Test is a Pass or Fail
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

setDefaultTimeout(60 * 1000);

Given('The Login page is displayed', function () {
  this.actions.clear(loginPage.txtUsername)
  return this.actions.clear(loginPage.txtPassword);
});

Given('The User enters a correct Username {string} and Password {string}', function (usernameFromFeatureFile, passwordFromFeatureFile) {
  
  this.loginDetails = { username: usernameFromFeatureFile, password: passwordFromFeatureFile }
  
  // SIMON: We're using 'loginDetails' to store our 'username' and 'password' in our 'World'
  //this.usernameWorld = username;
  //this.passwordWorld = password;

  this.actions.sendKeys(loginPage.txtUsername, this.loginDetails.username);
  return this.actions.sendKeys(loginPage.txtPassword, this.loginDetails.password);
});

Given('The User clicks the Login button', function () {
  return this.actions.click(loginPage.btnLogin);
});

Then('The Landing Page is displayed and the Username {string} is shown', function (username) {

  // SIMON: We don't need to use the 'username' from the Feature File. We've got it stored in our World
  // SIMON: We need to use 'this.loginDetails' because inside the 'verifyUserLoggedIn' method, we use 'loginDetails.username'.

  return expect(this.actions.isPresent((landingPage.verifyUserLoggedIn(this.loginDetails)))).to.eventually.be.true;
});








//Given("The Username {string} and Password {string} are valid", function (username, password) {

  //this.usernameWorld = username;
  //this.passwordWorld = password;

  //this.actions.clear(loginPage.txtUsername)
  //this.actions.clear(loginPage.txtPassword);
  //console.log("The Username and Password fields have been cleared");
    
  //this.actions.sendKeys(loginPage.txtUsername, this.usernameWorld);
  //this.actions.sendKeys(loginPage.txtPassword, this.passwordWorld);
  //console.log("Username and Password entered into the Login screen");
  
    //this.actions.click(loginPage.btnLogin);
    //return console.log("Login button clicked");
    //const arrayOfUsers = dataTable.hashes();
    //this.loginDetails = arrayOfUsers[0]

    //this.actions.clear(loginPage.txtUsername)
    //return this.actions.clear(loginPage.txtPassword);
  //});

//When("A user logs in with username {string} and password {string}", function (username, password) {

  //this.usernameWorld = username;
  //this.passwordWorld = password;

  //this.actions.sendKeys(loginPage.txtUsername, this.usernameWorld);
  //this.actions.sendKeys(loginPage.txtPassword, this.passwordWorld);

  //return this.actions.click(loginPage.btnLogin);
  //this.actions.clear(loginPage.txtUsername);
  //this.actions.clear(loginPage.txtPassword);
    //this.actions.sendKeys(loginPage.txtUsername, this.usernameWorld)
    //this.actions.sendKeys(loginPage.txtPassword, this.passwordWorld)
    //browser.waitForAngularEnabled(false);
    
    //return element.all(by.cssContainingText("#Label1",this.loginDetails.username));
    //return this.actions.click(loginPage.btnLogin);
  //});

//Then("The User is Logged in and the Landing Page appears", function () {
  //browser.waitForAngularEnabled(false);
  //return expect(landingPage.verifyUserLoggedIn(this.loginDetails).isPresent()).to.eventually.be.true;
  //});