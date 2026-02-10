import {Outlet} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout({}) {

  return (
    <div className="">
      <header className="">
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;