import CartWindget from "./CartWidget";

const ListadoNavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item active">
        <a className="nav-link text-light">Hombre</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light">Mujer</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light">Niños</a>
      </li>
      <CartWindget />
    </ul>
  );
};

export const NavBar = () => {
  return (
    <header>
      <nav className=" navbar navbar-light bg-danger p-2">
        <a className="navbar-brand fs-3 ms-4 fw-bold font-monospace"> Azteka </a>

        <ListadoNavBar />
      </nav>
    </header>
  );
};

export default NavBar;
