import { browser, Config } from "protractor";

export const config: Config =
{
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //Preference Manager URL
    baseUrl: 'https://prefmanwebsitelcawupcwoq5fa-dev.azurewebsites.net/Login.aspx',

    //Telling Protractor that were using a custom Test Framework (Cucumber)
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    //Telling Protractor where to find our Feature files
    specs:
    [
        //".." Takes us back to the previous directory
        "../e2e/features/*.feature"
    ],

    //Maximising the Window at the start of our Tests
    onPrepare: () =>
    {
        browser.manage().window().maximize();
    },

    cucumberOpts:
    {
        //TypeScript Compiler
        compiler: "ts:ts-node/register",
        //Report Format
        format: "json:.tmp/results.json",
        profile: false,
        //Locations of the Step Definitions and Hooks
        require: ["./step-definitions/*.steps.js","./support/hooks.js"],
        //Tags Stating which Scenarios we will Run
        //tags: "@runThis",
        "no-source": true,
    },

    //Setting up the Reporting Framework
    plugins:
    [
        {
            options:
            {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true
            },
            package: 'protractor-multiple-cucumber-html-reporter-plugin'
        }
    ],
};