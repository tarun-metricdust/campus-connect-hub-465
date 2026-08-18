# AI Rules & Project Guidelines

## Tech Stack
- **Framework & Runtime**: React 18 with Vite (SWC plugin) for fast development and bundling.
- **Language**: TypeScript with strict typing across all components, hooks, and utility modules.
- **Styling**: Tailwind CSS v3 with `@tailwindcss/typography` and `tailwindcss-animate` for utility-first styling and smooth animations.
- **UI Component System**: shadcn/ui built on top of accessible Radix UI primitives.
- **Routing**: React Router v6 (`react-router-dom`) with centralized route configurations in `src/App.tsx`.
- **Icons**: `lucide-react` for consistent, accessible SVG iconography.
- **Form Handling & Validation**: `react-hook-form` integrated with `zod` via `@hookform/resolvers` for schema-based validation.
- **Data Fetching & Server State**: `@tanstack/react-query` for query caching, synchronization, and state management.
- **Data Visualization & Charts**: `recharts` and shadcn/ui Chart wrappers for interactive data presentations.
- **Feedback & Notifications**: `sonner` and Radix-based toast systems for user alerts and status messages.

---

## Library Usage Rules

Always adhere to the following library responsibilities — avoid installing redundant packages:

| Purpose / Category | Library / Tool | Usage Guidelines |
|---|---|---|
| **Styling & Layout** | Tailwind CSS & `cn()` (`clsx` + `tailwind-merge`) | Use Tailwind utility classes for all styling, layout, spacing, and responsive design. Always use the `cn()` helper from `@/lib/utils` to merge dynamic conditional classes safely. |
| **UI Components** | shadcn/ui (`src/components/ui/`) + Radix UI | Use prebuilt shadcn/ui components (Button, Dialog, DropdownMenu, Tabs, Select, etc.). Do not modify generated files in `src/components/ui/` directly; build composite or wrapper components in `src/components/` instead. |
| **Iconography** | `lucide-react` | Use Lucide icons exclusively for all UI elements, actions, badges, and navigation markers. |
| **Routing & Navigation** | `react-router-dom` | Manage all page routes, nested views, and redirects in `src/App.tsx`. Use `<Link>`, `<NavLink>`, and `useNavigate` for client-side navigation. |
| **Forms & Input Handling** | `react-hook-form` + `zod` | Use `react-hook-form` with the `Form` component wrapper from `@/components/ui/form` and define input schemas with `zod` for type-safe validation. |
| **Async State & Caching** | `@tanstack/react-query` | Use `useQuery` and `useMutation` hooks for fetching, mutating, and caching external asynchronous data. |
| **Toasts & Feedback** | `sonner` / `use-toast` | Use Sonner (`toast.success()`, `toast.error()`) or `useToast` for toast alerts and user feedback. |
| **Charts & Graphs** | `recharts` | Use `recharts` components wrapped in `@/components/ui/chart` for responsive bar charts, line graphs, area charts, and pie charts. |
| **Date & Calendar** | `date-fns` & `react-day-picker` | Use `date-fns` for date manipulation and formatting, and `react-day-picker` via `@/components/ui/calendar` for date selection. |
| **Modals & Drawers** | Radix Dialog / Sheet / `vaul` | Use `Dialog` or `Sheet` for standard modals and slide-outs; use `Drawer` (`vaul`) for mobile-friendly bottom drawers. |
| **Carousels & Sliders** | `embla-carousel-react` | Use `@/components/ui/carousel` for image sliders, hero banners, and horizontal scrolling item lists. |
| **Theme / Dark Mode** | `next-themes` | Manage light, dark, and system theme switching with `ThemeProvider` and `useTheme`. |

---

## Project Structure Conventions

- `src/pages/`: Contains complete page views (e.g., `Index.tsx`, `About.tsx`, `Departments.tsx`, `NotFound.tsx`).
- `src/components/`: Contains app-specific components, layouts, and feature sections (e.g., `Header.tsx`, `Footer.tsx`, `HeroSection.tsx`).
- `src/components/ui/`: Contains reusable, unopinionated shadcn/ui base primitives. Do not add domain-specific logic here.
- `src/hooks/`: Contains custom React hooks (e.g., `use-mobile.tsx`, `use-toast.ts`).
- `src/config/`: Contains static site configuration and metadata constants (e.g., `site.ts`).
- `src/lib/`: Contains shared helper functions and utilities (e.g., `utils.ts`).
- `src/App.tsx`: Central hub for top-level providers, query client, router setup, and route declarations.

---

## Best Practices & Guidelines

1. **Source Code Location**: All application code must reside in the `src/` directory.
2. **Page Updates**: When creating new feature components intended for the home view or main screens, import and display them in `src/pages/Index.tsx` (or the relevant page) so they are rendered.
3. **No Redundant Dependencies**: All standard UI components and Radix primitives are already configured and present in `src/components/ui/`. Import them directly without re-installing.
4. **Clean Code & Type Safety**: Export explicit TypeScript interfaces/types for props and state. Avoid using `any`.
