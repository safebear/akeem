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
}