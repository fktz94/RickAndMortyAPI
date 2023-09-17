import { Link, NavLink } from 'react-router-dom';

function NavigationLink({ to }) {
  const text = to.slice(0, 1).toUpperCase() + to.slice(1);
  return (
    <li>
      <NavLink
        to={to}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? 'rgb(231,224,219)' : '',
            color: isActive ? 'rgb(146,111,68)' : ''
          };
        }}
        className="px-4 py-1 border rounded text-2xl font-semibold tracking-wider bg-black/50 hover:text-brownColor hover:bg-whiteColor active:border-blueColor">
        {text}
      </NavLink>
    </li>
  );
}

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <Link to="/">
        <img
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png"
          alt="Logo de Rick and Morty"
          className="w-72"
        />
      </Link>
      <nav>
        <ul className="my-4 flex gap-6">
          <NavigationLink to="episodes" />
          <NavigationLink to="characters" />
          <NavigationLink to="locations" />
        </ul>
      </nav>
    </header>
  );
}
