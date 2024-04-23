// const {test, expect} = require('@playwright/test');
//or
import {test, expect} from '@playwright/test';

test('locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    //locating element in playwright

    //approach 1 - using property/id as a locator
    await  page.locator('id=login2').click();
    
    //approach 2
    await page.click('id=login2');



});

