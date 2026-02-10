const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">Event Scheduler</h1>
        <div>
            <ul>
                <li className="btn secondary text-center p-4 bg-base-200"><a href="/">Home</a></li>
                <li className="btn secondary text-center p-4 bg-base-200"><a href="/login">Login</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;