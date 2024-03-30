import { test, expect } from '@playwright/test'

import { UserProfilePage } from '../pages/userProfile'// importing te page object userProfile 
import { error } from 'console';

const fixtureData = require('../fixture.json');

//crating a suit for the different test 
test.describe('User profile Creation', () => {

    let userProfilePage;


    //before each test initiallize the page and userProfilPage instance
    test.beforeEach(async ({ page }) => {
        userProfilePage = new UserProfilePage(page)
        await page.goto('https://qa-assessment.pages.dev/.')

    })

    test('checck userProfile', async () => {
        // getting data from the fixture.json file
        const userData = fixtureData.users[0];
try{
        //validating user pfrofil creation by entering valid data in all the field madatory/optional
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.validEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.validConfirmPassword);
        await userProfilePage.fillDateOfBirth(userData.validDateOfBirth);
        await userProfilePage.fillPhoneNumber(userData.validPhoneNumber);
        await userProfilePage.fillAddress(userData.validAddress);
        await userProfilePage.fillLinkedInUrl(userData.validLinkedInUrl);
        await userProfilePage.fillGitHubUrl(userData.validGitHubUrl);
}catch (error){console.error('error occuresd', error)}
        // submit
        await userProfilePage.clickSubmitButton()
        //capturing the sucess
    })
        
    test('handling mandatory field with valid credential', async () => {
           const userData = fixtureData.users[0]
try{
        // fill mandatory field only
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.validEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.validConfirmPassword);
}catch (error){console.error('error occuresd', error)}
        //submiting 
        await userProfilePage.clickSubmitButton()
        // capturing the allert 

        /*await page.on('dialog', async (d) => {
            expect(d.type()).toContain('alert')
            expect(d.message).toContain("");
            await d.accept()
        })*/


    })


    test(' handling of invalid credentail ', async () => {
      try{  const userData = fixtureData.users[0]
        // filling the mandatory field with invalid credential 
        await userProfilePage.fillFirstName(userData.invalidFirstName);
        await userProfilePage.fillLastName(userData.invalidLastName);
        await userProfilePage.fillEmail(userData.invalidEmail);
        await userProfilePage.fillPassword(userData.invalidPassword);
        await userProfilePage.fillConfirmPassword(userData.invalidConfirmPassword);
      }catch(error){ console.error('Error ocurred:',error)}//submit
        await userProfilePage.clickSubmitButton()
        // captureing the error message 


    })
    test(' handling invalid email ', async () => {
// innitaiting an entry to access fixture in the fixture.json file
  try{  const userData = fixtureData.users[0]

        //filling the all mandatory field with valid credentail except the the email field
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.invalidEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.validConfirmPassword);
  } catch(error){ console.error('Error occurred:', error)}
        // then submit using the submit method calle forom the get userprofilepage
        await userProfilePage.clickSubmitButton()
        // trying to get an assertion taht us the expected is an error mesaage regarding whiich wet get intaracting with the body o the paage identifying to the deftcha



    })
    test('handling invalid comfrm password with invalid credential', async () => {
     try {  const userData = fixtureData.users[0]
        //fill all mandatory fileds with valid credential at confirm password enter invalid credentails
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.validEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.invalidConfirmPassword);
     } catch (error){ console.error('Error occurred:', error)}
     // then submit using the submitbuton method called forom the get userprofilepage object page 
        await userProfilePage.clickSubmitButton()
        // trying to get an assertion taht us the expected is an error mesaage regarding whiich wet get intaracting with the body o the paage identifying to the deftcha


    })
    test('handling invalid  phone number ', async () => {
      try{  const userData = fixtureData.users[0]
        //verifying the phone number by entering a diffrent format that that expected 
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.validEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.validConfirmPassword);
        await userProfilePage.fillDateOfBirth(userData.validDateOfBirth);
        await userProfilePage.fillPhoneNumber(userData.invalidPhoneNumber);
        await userProfilePage.fillAddress(userData.validAddress)
        await userProfilePage.fillLinkedInUrl(userData.validLinkedInUrl);
        await userProfilePage.fillGitHubUrl(userData.validGitHubUrl);
      } catch (error){ console.error('Error occurred:', error)}
        // then submit using the submitbuton method called forom the get userprofilepage object page 
        await userProfilePage.clickSubmitButton()
        // trying to get an assertion taht us the expected is an error mesaage regarding whiich wet get intaracting with the body o the paage identifying to the deftcha

    })
    test('handling date of birth field with invalid dob', async () => {
      try{  const userData = fixtureData.users[0]
        // verify the the date of birth field do not acccept invalid data that is the feature date 
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.validEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.validConfirmPassword);
        await userProfilePage.fillDateOfBirth(userData.invalidDateOfBirth);
        await userProfilePage.fillPhoneNumber(userData.validPhoneNumber);
        await userProfilePage.fillAddress(userData.validAddress);
        await userProfilePage.fillLinkedInUrl(userData.validLinkedInUrl);
        await userProfilePage.fillGitHubUrl(userData.validGitHubUrl);
      }catch(error){ console.error('Error occured:',error)}
        //submit
        await userProfilePage.clickSubmitButton()
        //displaying the error message at the end of which expected
    })

    test('handling invalid the url', async () => {
      try{  const userData = fixtureData.users[0]
        // verify the githud and linkedIn urls with invalid url that is by entering valid credentaials on all the fields and passing an invalid credential on the two optional requirement 
        await userProfilePage.fillFirstName(userData.validFirstName);
        await userProfilePage.fillLastName(userData.validLastName);
        await userProfilePage.fillEmail(userData.validEmail);
        await userProfilePage.fillPassword(userData.validPassword);
        await userProfilePage.fillConfirmPassword(userData.validConfirmPassword);
        await userProfilePage.fillDateOfBirth(userData.validDateOfBirth);
        await userProfilePage.fillPhoneNumber(userData.validPhoneNumber);
        await userProfilePage.fillAddress(userData.validAddress);
        await userProfilePage.fillLinkedInUrl(userData.invalidLinkedInUrl);
        await userProfilePage.fillGitHubUrl(userData.invalidGitHubUrl);
      } catch { console.error('Error occurred:', error)}
        //submit
        await userProfilePage.clickSubmitButton()
    })





























































































})
