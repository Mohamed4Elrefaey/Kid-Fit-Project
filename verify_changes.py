import os
from playwright.sync_api import Page, expect, sync_playwright

def verify_site(page: Page):
    # Go to landing page
    page.goto("http://localhost:5173")
    page.wait_for_timeout(500)
    page.screenshot(path="/home/jules/verification/landing.png")

    # Click Sign Up in Navbar
    page.get_by_role("link", name="Sign Up").click()
    page.wait_for_timeout(500)
    expect(page.get_by_role("heading", name="Create an Account")).to_be_visible()
    page.screenshot(path="/home/jules/verification/signup.png")

    # Go to BMI page
    page.goto("http://localhost:5173/bmi")
    page.wait_for_timeout(500)
    expect(page.get_by_role("heading", name="BMI Calculator")).to_be_visible()

    # Calculate BMI
    page.get_by_label("Height (cm)").fill("170")
    page.wait_for_timeout(500)
    page.get_by_label("Weight (kg)").fill("70")
    page.wait_for_timeout(500)
    page.get_by_role("button", name="Calculate BMI").click()
    page.wait_for_timeout(500)
    expect(page.get_by_text("24.2")).to_be_visible()
    page.screenshot(path="/home/jules/verification/bmi_result.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/video", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # For mobile view
        mobile_context = browser.new_context(
            viewport={'width': 375, 'height': 667},
            record_video_dir="/home/jules/verification/video"
        )
        page = mobile_context.new_page()
        try:
            verify_site(page)
            page.screenshot(path="/home/jules/verification/mobile_final.png")
        finally:
            mobile_context.close()

        # For desktop view
        desktop_context = browser.new_context(
            viewport={'width': 1280, 'height': 800},
            record_video_dir="/home/jules/verification/video"
        )
        page = desktop_context.new_page()
        try:
            verify_site(page)
            page.screenshot(path="/home/jules/verification/desktop_final.png")
        finally:
            desktop_context.close()

        browser.close()
