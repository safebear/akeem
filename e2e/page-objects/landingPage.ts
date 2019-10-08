import { $, by, element } from "protractor";

export class LandingPage
{
    //$ = element(by.cssSelector())
    //. = class
    //# = id
    
    //Identifying the Username displayed on the Landing Page
    public txtUsernameLandingPage = $("#Label1");

    //Checking the Username displayed on the Landing Page against the Username entered in the Login page
    public verifyUserLoggedIn = (loginDetails: myLibrary.LoginDetails) =>
    {
        //#Label1 = The Username displayed on the Landing Page
        //SIMON: loginDetails.username = this is the 'username' part of 'loginDetails' (see 'global.d.ts' and you can see that LoginDetails should contain a 'username' and a 'password')
        return element(by.cssContainingText("#Label1",loginDetails.username));
    }
}