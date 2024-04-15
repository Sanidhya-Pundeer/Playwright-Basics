const {test,expect} = require('@playwright/test');

test('HomePage', async ({page})=>{

    await page.goto('https://github.com/Sanidhya-Pundeer?tab=repositories');
    
    const pageTitle = await page.title();
    console.log('Page title is: ', pageTitle);

    const pageUrl = await page.url();
    console.log('Page URL is: ', pageUrl);

    //to apply the validation:
    await expect(page).toHaveTitle('Sanidhya-Pundeer (Sanidhya-Pundeer) / Repositories · GitHub');
    
    await expect(page).toHaveURL('https://github.com/Sanidhya-Pundeer?tab=repositories');
    await page.close();
    
    
});

