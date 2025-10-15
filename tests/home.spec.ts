import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(new RegExp(requirements.name))
  })

  test('has welcome message', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('hello app')
  })

  

  test('has responsive design', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('main')).toBeVisible()
  })
})