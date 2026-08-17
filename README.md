# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/74bb2882-2168-4765-868d-67e3028a2bfe

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/74bb2882-2168-4765-868d-67e3028a2bfe) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Customizing this template

All institution-specific content is centralized in `src/config/site.ts`. Update that file to rebrand the site for your college or university:

- `shortName` and `fullName` — logo and header text
- `establishedYear`, `affiliation`, `accreditation` — institution metadata
- `hero` — headline, subheadline, call-to-action buttons, and statistics
- `about` — about page intro, mission, vision, timeline, achievements, and stats
- `contact` — phone, email, website, and address
- `footer` — footer description and copyright
- `departments` and `faculty` — page intros and faculty email domain

Images such as `/uvce-campus.jpg` can be replaced with your own campus photos in the `public/` folder.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/74bb2882-2168-4765-868d-67e3028a2bfe) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
