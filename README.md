## Acceptance Criteria:


- Only 1 step of the form should be shown at a time.
- In the header, there's a list of steps. Users should be able to click each item to jump to the appropriate step.
- The plans displayed in the Select Plan section should come from libs/getPlans.js
- The "Continue" button at the bottom should take the user to the next step, if they've successfully completed the current step.
- When the user is on the final step, the "Continue" button should instead read "Submit". Clicking the button should trigger a window.alert, as a placeholder for sending the data to our backend.
- The "Reset" button should clear all of the form data, and take the user back to Step 1.
- **You should give some thought to the overall component architecture.** Feel free to extract new components as you see fit, or to refactor any of the provided code. Pretend you're working on this on-the-job; what would you need to do to get this code production-ready?


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

# Multi-Step Signup

## Rules
- No additional third-party packages are allowed.
    - the [clsx](https://www.npmjs.com/package/clsx) utility package has been included to make it easier to apply multiple CSS classes to an element.
- Feel free to google anything you'd like.

## Acceptance Criteria:


- Only 1 step of the form should be shown at a time.
- In the header, there's a list of steps. Users should be able to click each item to jump to the appropriate step.
- The plans displayed in the Select Plan section should come from libs/getPlans.js
- The "Continue" button at the bottom should take the user to the next step, if they've successfully completed the current step.
- When the user is on the final step, the "Continue" button should instead read "Submit". Clicking the button should trigger a window.alert, as a placeholder for sending the data to our backend.
- The "Reset" button should clear all of the form data, and take the user back to Step 1.
- **You should give some thought to the overall component architecture.** Feel free to extract new components as you see fit, or to refactor any of the provided code. Pretend you're working on this on-the-job; what would you need to do to get this code production-ready?
