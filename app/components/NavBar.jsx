export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center w-full">
        <ul className="flex space-x-4 justify-center items-center">
          <li>
            <link className="hover:text-blue-500" href="/">
              Home
            </link>
          </li>
          <li>
            <link className="hover:text-blue-500" href="/">
              Saved Jokes
            </link>
          </li>
        </ul>
        <div>
          <LogoutOrLogin />
        </div>
      </div>
    </nav>
  );
}
