# Garage Dashboard (Multi-Tenant)# Garage Dashboard

- Treat `api/googleAnalytics.js` as server-side code (serverless/Node runtime).- Use Supabase RLS policies before production.- Keep secrets only in `.env`, never `.env.example`.## Security Notes4. Ensure GA service account has access to that GA4 property.3. Share login credentials with the client.- optional `logo_url` and `color_theme`- `analytics_property_id = GA4 property id for that garage`- `user_id = auth user id`2. Insert garage row with:1. Create Supabase Auth user for the garage owner.## Garage Onboarding ChecklistDashboard will automatically show these bookings to the garage account linked by `user_id`.```}  "message": "Please call before noon"  "service": "Oil Change",  "phone": "+905551112233",  "license_plate": "34ABC123",  "garage_id": "YOUR_GARAGE_UUID",{```jsonExample payload shape:Client websites should insert booking rows into Supabase `bookings` with a known `garage_id`.## Client Website Integration (Bookings)If GA is unavailable, the app falls back to mock analytics data.- conversion rate- conversions- pageviews- visitors this month- visitors today- API fetches GA4 Data API metrics and returns:- Frontend (`src/services/analyticsService.js`) calls `api/googleAnalytics.js` with the garage property id.- `analytics_property_id` is stored per garage in Supabase.## Google Analytics FlowNo garage dropdown is used for client accounts.4. For admin, bookings are aggregated across garages and GA can aggregate across configured properties.3. For non-admin, all booking/analytics queries are scoped to that garage.- Admin: all garages- Non-admin: `garages where user_id = current_user.id`2. App fetches garage rows:1. User logs in via Supabase Auth.## Multi-Tenant Data Flow```npm run dev```bash4. Start app:- `GA_PROPERTY_ID` (fallback only)- `GA_SERVICE_ACCOUNT_JSON`- `VITE_ADMIN_EMAILS` (optional)- `VITE_SUPABASE_ANON_KEY`- `VITE_SUPABASE_URL`3. Fill `.env`:```cp .env.example .env```bash2. Create env file:```npm install```bash1. Install dependencies:## Environment SetupThe schema file includes commented RLS policy examples for future hardening.- `bookings`: `id`, `garage_id`, `license_plate`, `phone`, `service`, `message`, `created_at`- `garages`: `id`, `name`, `domain`, `analytics_property_id`, `logo_url`, `color_theme`, `user_id`Use `supabase/schema.sql` as a starter.## Required Tables```  vite.config.js  package.json  index.html  dashboard.html  bookings.html  analytics.html      calendar.js      branding.js      auth.js    utils/      global.css    styles/      supabaseClient.js      garageService.js      bookingService.js      analyticsService.js    services/      loginPage.js      dashboardPage.js      bookingsPage.js      analyticsPage.js    pages/      index.js      dashboard.js      bookings.js      analytics.js    entries/      mockData.js    data/      sidebar.js      navbar.js      charts.js      chart.js      appShell.js    components/  src/    schema.sql  supabase/    googleAnalytics.js  api/garage-dashboard/```text## Folder Structure- Dashboard, Bookings, and Analytics pages with modular services/components- Dynamic branding per garage (`logo_url`, `color_theme.primary`, `color_theme.secondary`)- Google Analytics Data API integration per garage `analytics_property_id`- Optional admin mode to view all garages (`VITE_ADMIN_EMAILS` or user metadata role)- Garage-scoped booking reads from `bookings.garage_id`- Multi-tenant garage resolution from `garages.user_id = auth.users.id`- Supabase Auth email/password login## What This Version SupportsEach garage logs in with its own Supabase Auth account and sees only data tied to its `user_id` and `garage_id`.Vite + Vanilla JavaScript dashboard for garage clients.
Multi-page Vite + Vanilla JavaScript starter for a garage operations dashboard.

## Included Features
- Supabase login flow (`index.html`)
- Booking management with Supabase-backed fetch + fallback demo data
- Calendar view for appointments on `bookings.html`
- Analytics page (`analytics.html`) with charted visitor trends
- Reusable UI components: navbar, sidebar, charts
- API starter endpoint in `api/googleAnalytics.js` for Google Analytics Data API
- Global styling in `src/styles/global.css`

## Pages
- `index.html` (login)
- `dashboard.html`
- `bookings.html`
- `analytics.html`

## Services
- `src/services/supabaseClient.js`
- `src/services/analyticsService.js`
- `src/services/bookingService.js`

## Project Structure
```text
garage-dashboard/
	api/
		googleAnalytics.js
	public/
	src/
		components/
			appShell.js
			charts.js
			navbar.js
			sidebar.js
		data/
			mockData.js
		entries/
			analytics.js
			bookings.js
			dashboard.js
			index.js
		pages/
			analyticsPage.js
			bookingsPage.js
			dashboardPage.js
			loginPage.js
		services/
			analyticsService.js
			bookingService.js
			supabaseClient.js
		styles/
			global.css
		utils/
			auth.js
			calendar.js
	analytics.html
	bookings.html
	dashboard.html
	index.html
	package.json
	vite.config.js
```

## Quick Start
1. Install dependencies:
	 ```bash
	 npm install
	 ```
2. Create env file:
	 ```bash
	 cp .env.example .env
	 ```
3. Add your Supabase credentials to `.env`:
	 - `VITE_SUPABASE_URL`
	 - `VITE_SUPABASE_ANON_KEY`
4. (Optional, for analytics API) Add:
	 - `GA_PROPERTY_ID`
	 - `GA_SERVICE_ACCOUNT_JSON`
5. Start Vite:
	 ```bash
	 npm run dev
	 ```

## Notes
- `api/googleAnalytics.js` is a server-side starter file. It should run in a serverless or Node API environment.
- Without GA credentials, analytics automatically falls back to mock visitor data.
- Without Supabase credentials, the app runs in demo mode with seeded bookings.