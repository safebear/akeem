import { Given, Then, When } from "cucumber";

//Importing Page Objects
import { LoginPage } from "../page-objects/loginPage";
import { LandingPage } from "../page-objects/landingPage";

//Creating Page Objects
const loginPage: LoginPage = new LoginPage();
const landingPage: LandingPage = new LandingPage();

//Assertion - Telling Cucumber if the Test is a Pass or Fail
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given('The Username and Password are valid', function (dataTable) {
    const arrayOfUsernames = dataTable.hashes();
    this.loginDetails = arrayOfUsernames[0];

    return expect(landingPage.verifyUserLoggedIn(this.loginDetails).isPresent()).to.eventually.be.false;
  });

When('A valid Username and Password is entered then the Login button is clicked', function () {
    loginPage.txtUsername.sendKeys(this.loginDetails.username);
    loginPage.txtPassword.sendKeys(this.loginDetails.password);
    return loginPage.btnLogin.click();
  });

Then('The User is Logged in and the Landing Page appears', function () {
    return expect(landingPage.verifyUserLoggedIn(this.loginDetails).isPresent()).to.eventually.be.true;
  });