import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainLayout from './layouts/mainlayout.jsx';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout setToken={setToken} />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login setToken={setToken} />} />
          <Route path='register' element={<Register />} />
          
        <AuthRoute>
          <Route path='app' element={<IsLogin isLogin={isLogin} />}>
            <Route path="app/events" element={<Events />} />
            <Route path="app/events/:id" element={<EventDetails />} />
          {/* We might need more routes here */}
          </Route>
        </AuthRoute>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
