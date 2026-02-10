import Outlet from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({setToken}) {

  return (
    <div className="">
      <header className="">
        <Navbar setToken={setToken} />
      </header>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout();