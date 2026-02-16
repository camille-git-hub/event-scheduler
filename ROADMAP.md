# Complete Event Scheduler Roadmap 🗺️

Here's your complete guide to building the event scheduler application!

---

## 📋 Project Structure

```
event-scheduler/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar with login/logout
│   │   ├── EventCard.jsx    # Display individual event
│   │   ├── EventForm.jsx    # Create/Edit event form
│   │   └── ProtectedRoute.jsx # Protect routes that need auth
│   ├── pages/               # Full page components
│   │   ├── HomePage.jsx     # Landing page
│   │   ├── SignUpPage.jsx   # Sign up form
│   │   ├── LoginPage.jsx    # Login form
│   │   ├── EventsPage.jsx   # List all events
│   │   ├── EventDetailPage.jsx # Single event view
│   │   ├── CreateEventPage.jsx # Create new event
│   │   └── EditEventPage.jsx   # Edit existing event
│   ├── services/            # API communication
│   │   └── api.js           # All fetch calls to backend
│   ├── context/             # State management
│   │   └── AuthContext.jsx  # User authentication state
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
```

---

## 🎯 Phase 1: Setup & Foundation

### Step 1: Install Additional Dependencies
```bash
npm install react-router-dom
```

### Step 2: Create Folder Structure
```bash
# Create these folders in src/
mkdir src/components
mkdir src/pages
mkdir src/services
mkdir src/context
```

### Step 3: Create API Service Layer

**File: `src/services/api.js`**
- Base URL configuration (`http://localhost:3001`)
- Helper function to get auth token from localStorage
- Fetch functions for all endpoints:
  - `signUp(userData)` - Register new user
  - `login(email, password)` - Login user
  - `getProfile()` - Get logged-in user info
  - `getAllEvents()` - Get all events
  - `getEventById(id)` - Get single event
  - `createEvent(eventData)` - Create new event
  - `updateEvent(id, eventData)` - Update event
  - `deleteEvent(id)` - Delete event
  - `getUpcomingEvents()` - Get upcoming events

### Step 4: Create Authentication Context

**File: `src/context/AuthContext.jsx`**
- Store logged-in user info
- Store JWT token (save to localStorage)
- Provide signup/login/logout functions
- Check if user is authenticated
- Provide context to entire app

---

## 🎯 Phase 2: Authentication

### Step 5: Sign Up Page

**File: `src/pages/SignUpPage.jsx`**
- Name/Username input field
- Email input field
- Password input field
- Confirm Password input field
- Sign Up button
- Form validation:
  - All fields required
  - Email format validation
  - Password minimum length (8+ characters)
  - Passwords must match
- Error message display
- Link to Login page ("Already have an account? Login")
- On success: auto-login and redirect to events page OR show success message

### Step 6: Login Page

**File: `src/pages/LoginPage.jsx`**
- Email input field
- Password input field
- Login button
- Form validation (required fields)
- Error message display
- Link to Sign Up page ("Don't have an account? Sign Up")
- On success: save token to localStorage, redirect to events page

### Step 7: Protected Routes

**File: `src/components/ProtectedRoute.jsx`**
- Check if user is authenticated (has valid token)
- If yes: show the requested page
- If no: redirect to login page
- Wrap protected pages with this component

### Step 8: Navbar Component

**File: `src/components/Navbar.jsx`**
- App title/logo
- Navigation links

**When NOT logged in:**
- Home
- Events (view only)
- Login button
- Sign Up button

**When logged in:**
- Home
- Events
- Create Event
- User email/name display
- Logout button

---

## 🎯 Phase 3: Event Display

### Step 9: Events List Page

**File: `src/pages/EventsPage.jsx`**
- Fetch all events on page load
- Display events in a grid/list layout
- Loading state (spinner while fetching)
- Error state (if API fails)
- Empty state ("No events yet")
- Filter toggle: "All Events" vs "Upcoming Events"
- Each event shows:
  - Title
  - Date & Time (formatted nicely)
  - Location
  - Description (truncated to 100 chars)
  - "View Details" button
  - "Edit" button (only if authenticated)
  - "Delete" button (only if authenticated)

### Step 10: Event Card Component

**File: `src/components/EventCard.jsx`**
- Reusable card for displaying event info
- Format date/time nicely (e.g., "Feb 10, 2026 at 3:00 PM")
- Style with Tailwind CSS + DaisyUI
- Props: 
  - `event` (event data object)
  - `showActions` (boolean - show edit/delete buttons)
  - `onDelete` (callback function)

### Step 11: Event Detail Page

**File: `src/pages/EventDetailPage.jsx`**
- Get event ID from URL params (using `useParams`)
- Fetch single event by ID on load
- Loading state
- Error state (event not found)
- Display full event details:
  - Title
  - Full description
  - Date & Time
  - Location
  - Organizer info (user who created it)
  - Number of attendees (if available)
- Action buttons:
  - "Back to Events" button
  - "Edit" button (only if authenticated)
  - "Delete" button with confirmation modal (only if authenticated)

---

## 🎯 Phase 4: Event Management (Create/Edit/Delete)

### Step 12: Event Form Component

**File: `src/components/EventForm.jsx`**
- Reusable form for BOTH create AND edit
- Form fields:
  - **Title** (text input, required)
  - **Description** (textarea, required)
  - **Date** (date input, required)
  - **Time** (time input, required)
  - **Location** (text input, required)
- Form validation (all fields required)
- Props:
  - `initialData` (for edit mode, pre-fill form)
  - `onSubmit` (callback function)
  - `submitLabel` ("Create Event" or "Update Event")
- Submit button
- Cancel button (navigate back)
- Loading state during submission

### Step 13: Create Event Page

**File: `src/pages/CreateEventPage.jsx`**
- Protected route (must be logged in)
- Use EventForm component
- On submit: 
  - Call `createEvent()` API
  - Show loading state
- On success: 
  - Show success message
  - Redirect to events list
- On error:
  - Show error message
  - Keep form data

### Step 14: Edit Event Page

**File: `src/pages/EditEventPage.jsx`**
- Protected route (must be logged in)
- Get event ID from URL params
- Fetch event data to pre-fill form
- Use EventForm component with `initialData`
- On submit:
  - Call `updateEvent(id, data)` API
  - Show loading state
- On success:
  - Show success message
  - Redirect to event detail page
- On error:
  - Show error message

### Step 15: Delete Functionality

**Add to EventDetailPage.jsx and EventCard.jsx**
- Delete button (styled as danger/red)
- Confirmation modal/dialog:
  - "Are you sure you want to delete this event?"
  - "Cancel" button
  - "Delete" button
- On confirm:
  - Call `deleteEvent(id)` API
  - Show loading state
- On success:
  - Show success message
  - Redirect to events list
- On error:
  - Show error message
  - Keep modal open

---

## 🎯 Phase 5: Home Page & Routing

### Step 16: Home Page

**File: `src/pages/HomePage.jsx`**
- Hero section with welcome message
- Brief description of the app
- Call-to-action buttons:
  - "View All Events" button
  - "Sign Up" button (if not logged in)
  - "Create Event" button (if logged in)
- Featured section:
  - Show 3-5 upcoming events preview
  - Use EventCard component
  - "See All Events" link
- Nice background, images, or illustrations

### Step 17: Set Up Routing

**File: `src/App.jsx`**
- Import BrowserRouter, Routes, Route
- Import all page components
- Import AuthContext provider
- Set up routes:

```javascript
/ → HomePage
/signup → SignUpPage
/login → LoginPage
/events → EventsPage
/events/:id → EventDetailPage
/events/create → CreateEventPage (protected)
/events/:id/edit → EditEventPage (protected)
```

- Wrap entire app with AuthProvider
- Add 404 Not Found page (optional)

---

## 🎯 Phase 6: Polish & UX

### Step 18: Styling & Design

- Use **DaisyUI components**:
  - Cards for events
  - Buttons (primary, secondary, danger)
  - Forms (input, textarea, labels)
  - Modals for delete confirmation
  - Alerts for success/error messages
  - Navbar component
  - Loading spinners
- **Responsive design**:
  - Mobile-friendly layout
  - Grid that adapts to screen size
  - Hamburger menu for mobile navbar
- **Consistent styling**:
  - Color scheme (pick a theme from DaisyUI)
  - Spacing and typography
  - Hover effects on buttons and cards

### Step 19: Loading States

Add to all pages that fetch data:
- Spinner/skeleton while loading
- "Loading..." text
- Disable buttons during submission
- Show progress indicators

### Step 20: Error Handling

**In API service (`api.js`):**
- Handle network errors
- Handle 401 Unauthorized → redirect to login
- Handle 404 Not Found
- Handle 500 Server Error
- Return user-friendly error messages

**In components:**
- Display error messages in alerts/toasts
- Show specific errors ("Email already exists", "Invalid credentials")
- Fallback UI for failed API calls

### Step 21: Success Messages

- Toast notifications OR alert banners
- Show on:
  - Successful sign up
  - Successful login
  - Event created
  - Event updated
  - Event deleted
- Auto-dismiss after 3-5 seconds

### Step 22: Form Validation

- Real-time validation (show errors as user types)
- Prevent submission if form is invalid
- Highlight invalid fields
- Clear, helpful error messages
- Email format validation
- Password strength indicator (optional)

---

## 🎯 Phase 7: Optional Enhancements

### Nice-to-Have Features:

- **Search/Filter Events**
  - Search by title or description
  - Filter by date range
  - Filter by location

- **Sort Events**
  - By date (ascending/descending)
  - By title (alphabetical)
  - By creation date

- **Pagination**
  - Show 10-20 events per page
  - Previous/Next buttons
  - Page numbers

- **User Profile Page**
  - Display user info
  - Edit profile (name, email)
  - Change password
  - View events created by user

- **Calendar View**
  - Display events in a calendar layout
  - Click on date to see events
  - Monthly/weekly view

- **Event Categories/Tags**
  - Add categories to events (e.g., "Conference", "Workshop")
  - Filter by category
  - Color-coded tags

- **RSVP/Attendance**
  - Users can RSVP to events
  - Show attendee list
  - Track attendance count

- **Dark Mode**
  - Toggle between light/dark theme
  - Save preference to localStorage

- **Event Images**
  - Upload image for event
  - Display in card and detail page

- **Share Events**
  - Copy link to event
  - Share on social media

---

## 📊 Development Timeline Suggestion

| Phase | Tasks | Estimated Time | Priority |
|-------|-------|---------------|----------|
| **Phase 1** | Setup, folders, API service, Auth context | 2-3 hours | 🔴 Critical |
| **Phase 2** | Sign Up, Login, Protected Routes, Navbar | 3-4 hours | 🔴 Critical |
| **Phase 3** | Events List, Event Card, Event Details | 3-4 hours | 🔴 Critical |
| **Phase 4** | Create, Edit, Delete Events | 4-5 hours | 🔴 Critical |
| **Phase 5** | Home Page, Routing | 2-3 hours | 🔴 Critical |
| **Phase 6** | Polish, Styling, Error Handling | 3-4 hours | 🟡 Important |
| **Phase 7** | Optional Features | 5-10 hours | 🟢 Optional |

**Total Core Development Time:** ~17-23 hours

---

## 🔑 API Endpoints Reference

```javascript
// Base URL
const API_URL = "http://localhost:3001/api";

// Authentication
POST   /api/auth/login          → Login user
                                  Body: { email, password }
                                  Returns: { token, user }

GET    /api/auth/profile        → Get logged-in user
                                  Headers: { Authorization: "Bearer <token>" }
                                  Returns: { user }

// Users
POST   /api/users               → Create new user (Sign Up)
                                  Body: { name, email, password }
                                  Returns: { user }

GET    /api/users               → Get all users
                                  Returns: [{ user }, ...]

// Events
GET    /api/events              → Get all events
                                  Returns: [{ event }, ...]

GET    /api/events/upcoming     → Get upcoming events
                                  Returns: [{ event }, ...]

GET    /api/events/:id          → Get single event
                                  Returns: { event }

POST   /api/events              → Create event (requires auth)
                                  Headers: { Authorization: "Bearer <token>" }
                                  Body: { title, description, date, time, location }
                                  Returns: { event }

PUT    /api/events/:id          → Update event (requires auth)
                                  Headers: { Authorization: "Bearer <token>" }
                                  Body: { title, description, date, time, location }
                                  Returns: { event }

DELETE /api/events/:id          → Delete event (requires auth)
                                  Headers: { Authorization: "Bearer <token>" }
                                  Returns: { message }
```

---

## 🚀 Getting Started Checklist

### Prerequisites:
- [ ] Events API is running (`npm run dev` in events-api folder) → http://localhost:3001
- [ ] Your frontend is running (`npm run dev` in event-scheduler folder) → http://localhost:5173
- [ ] Test Events API in Swagger UI → http://localhost:3001/api-docs

### Development Steps:
- [ ] Install react-router-dom
- [ ] Create folder structure (components, pages, services, context)
- [ ] **Phase 1:** Create `services/api.js` with all API functions
- [ ] **Phase 1:** Create `context/AuthContext.jsx` for auth state
- [ ] **Phase 2:** Build SignUpPage
- [ ] **Phase 2:** Build LoginPage
- [ ] **Phase 2:** Build ProtectedRoute component
- [ ] **Phase 2:** Build Navbar component
- [ ] **Phase 3:** Build EventsPage (list all events)
- [ ] **Phase 3:** Build EventCard component
- [ ] **Phase 3:** Build EventDetailPage
- [ ] **Phase 4:** Build EventForm component
- [ ] **Phase 4:** Build CreateEventPage
- [ ] **Phase 4:** Build EditEventPage
- [ ] **Phase 4:** Add delete functionality
- [ ] **Phase 5:** Build HomePage
- [ ] **Phase 5:** Set up routing in App.jsx
- [ ] **Phase 6:** Add styling, loading states, error handling
- [ ] **Phase 6:** Test entire user flow
- [ ] **Phase 7:** (Optional) Add enhancements

---

## 🔄 Complete User Flow

### New User Journey:
1. Visit homepage
2. Click "Sign Up"
3. Fill out sign up form (name, email, password)
4. Submit → Account created, auto-login
5. Redirected to Events page
6. Can view, create, edit, delete events
7. Can logout

### Returning User Journey:
1. Visit homepage
2. Click "Login"
3. Enter email and password
4. Submit → Logged in
5. Redirected to Events page
6. Can manage events
7. Can logout

### Guest User Journey:
1. Visit homepage
2. Click "View Events"
3. See all events (read-only)
4. Click event to see details
5. Cannot create/edit/delete
6. Prompted to sign up/login for full access

---

## 💡 Development Tips

1. **Start with the backend first**
   - Make sure Events API is running
   - Test endpoints in Swagger UI
   - Understand the data structure

2. **Build in order**
   - Don't skip phases
   - Each phase builds on the previous
   - Test as you go

3. **Use console.log liberally**
   - Log API responses
   - Log state changes
   - Debug step by step

4. **Test authentication early**
   - Make sure login/signup works
   - Test token storage
   - Test protected routes

5. **Style as you go**
   - Don't wait until the end
   - Use DaisyUI components from the start
   - Reference: https://daisyui.com/components/

6. **Handle errors gracefully**
   - Always assume API calls can fail
   - Show user-friendly messages
   - Provide fallback UI

7. **Commit frequently**
   - Commit after each feature
   - Write clear commit messages
   - Push to GitHub regularly

8. **Ask for help when stuck**
   - Don't spin your wheels
   - Debug systematically
   - Check browser console and network tab

---

## 🎨 Recommended DaisyUI Components

- **Card** → EventCard
- **Button** → All buttons
- **Input** → Form fields
- **Textarea** → Description field
- **Modal** → Delete confirmation
- **Alert** → Error/success messages
- **Navbar** → Top navigation
- **Loading** → Spinners
- **Badge** → Event tags/categories
- **Hero** → HomePage header

**DaisyUI Themes to try:**
- light (default)
- dark
- cupcake
- bumblebee
- emerald
- corporate

---

## 🤝 Team Collaboration Tips

- **Divide and conquer:** Split features between team members
- **Work on separate branches:** Create feature branches, then merge
- **Communication is key:** Sync regularly on progress
- **Code reviews:** Review each other's pull requests
- **Stay organized:** Use GitHub Issues or a project board
- **Consistent coding style:** Agree on formatting and naming conventions

---

## 📚 Helpful Resources

- **React Documentation:** https://react.dev/
- **React Router:** https://reactrouter.com/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **DaisyUI Components:** https://daisyui.com/components/
- **Fetch API:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **JWT Authentication:** https://jwt.io/introduction

---

**Good luck with your project! 🚀**