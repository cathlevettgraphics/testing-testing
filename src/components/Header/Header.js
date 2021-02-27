import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/counter">counter</NavLink>
        <NavLink to="/color-picker">color picker</NavLink>
      </nav>
    </div>
  );
}

export default Header;

// https://reactrouter.com/web/api/Router/history-object
