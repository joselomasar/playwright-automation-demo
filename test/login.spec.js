// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('debería iniciar sesión con éxito', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Validación (Assertion)
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
