//Used to access code from Libraries e.g. Cucumber or Other Files in the Project
import { World } from "cucumber";
import { Actions } from "./actions";

//Defining what Objects and Variables we want to share between Steps of a Scenario
declare module "cucumber"
{
    interface World
    {
        //Where we stored our Test Data - Username and Password from the global.d.ts
        //SIMON: So we don't also need 'usernameWorld' and 'passwordWorld' below
        loginDetails: myLibrary.LoginDetails;

        actions: Actions;

        // SIMON: You don't need these - you're storing 'loginDetails' in the variable above!
        // usernameWorld: string;
        // passwordWorld: string;
    }
}