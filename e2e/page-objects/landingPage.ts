import { $, by, element } from "protractor";

export class LandingPage
{
    //$ = element(by.cssSelector())
    //. = class
    //# = id
    
    //Identifying the Username displayed on the Landing Page
    public txtUsernameLandingPage = $("#Label1");

    //Checking the Username displayed on the Landing Page against the Username entered in the Login page
    public verifyUserLoggedIn = (username: string) =>
    {
        //#Label1 = The Username displayed on the Landing Page
        return element(by.cssContainingText("#Label1", username));
    }
}