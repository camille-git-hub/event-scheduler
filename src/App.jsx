import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainlayout.jsx';
import Home from './pages/Home.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
import CreateEventPage from './pages/CreateEventPage.jsx';
import { getAllEvents } from './services/api';
import { useEffect } from 'react';

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {

  useEffect(() => {
    getAllEvents().then(events => {
    console.log('Events:', events);
    });
    }, []);
 
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />

          <Route path='api' element={<ProtectedRoute />}>
            <Route path="new-event" element={<CreateEventPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="events/:id" element={<EventDetailPage />} />
          {/* We might need more routes here */}
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}