
from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the base URL
            page.goto("http://localhost:5173/hunt/")

            # Wait for content to load
            page.wait_for_selector('h1, h2, h3, main', timeout=5000)

            # Take a screenshot
            page.screenshot(path="verification_screenshot.png")
            print("Screenshot taken successfully")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_app()
