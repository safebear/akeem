import { $, by, element } from "protractor";

export class LoginPage
{
    //$ = element(by.cssSelector())
    //. = class
    //# = id

    //Identifying the Username, Password and Login button on the Login Page
    public txtUsername = $("#Username")
    public txtPassword = $("#Password")
    public btnLogin = $("#Button1")

    //Checking the Username displayed on the Landing Page against the Username entered in the Login page
    public verifyUserLoggedIn = (loginDetails: myLibrary.LoginDetails) =>
    {
        //#Label1 = The Username displayed on the Landing Page
        return element(by.cssContainingText("#Label1",loginDetails.username));
    }
}