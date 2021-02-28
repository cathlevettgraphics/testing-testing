import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav data-testid="nav">
        <NavLink to="/">home</NavLink>
        <NavLink to="/counter">counter</NavLink>
        <NavLink to="/color-picker">color picker</NavLink>
        <NavLink to="/weather">weather</NavLink>
      </nav>
    </div>
  );
}

export default Header;
