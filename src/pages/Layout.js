import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="w3-bar">
          <Link className="w3-bar-item w3-mobile" to="/">Recipe</Link>
          <Link className="w3-bar-item w3-mobile" to="/Search">Search recipes</Link>
          <Link className="w3-bar-item w3-mobile" to="/Upload">Upload recipes</Link>
          <Link className="w3-bar-item w3-mobile" to="/About">About</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;