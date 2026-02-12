import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
import CreateEventPage from './pages/CreateEventPage.jsx';
import EditEventPage from './pages/EditEventPage.jsx';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
  
          {/* Public routes - anyone can view */}
          <Route path="events" element={<EventsPage />} />
          <Route path="events/:id" element={<EventDetailPage />} />

          {/* Protected routes - need auth */}
          <Route element={<ProtectedRoute />}>
          <Route path="new-event" element={<CreateEventPage />} />
          <Route path="events/:id/edit" element={<EditEventPage />} />
          </Route>
        </Route>
      </Routes>
    </Router> ) }

export default App;