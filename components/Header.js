import Link from "next/link";
const Header = () => {
  return (
    <nav
      style={{
        fontFamily: "ProximaNova-Regular, Arial, sans-serif;",
        backgroundColor: "#000",
        color: "white",
        height: "70px",
      }}
      className="navbar sticky-top navbar-expand"
    >
      <Link href="/">
        <a className="navbar-brand">
          <img
            src="/Aha/misc/logo.png"
            style={{
              width: "75px",
              height: "100%",
              marginLeft: "14%",
              marginTop: "20%",
              marginBottom: "15%",
              marginRight: "20%",
            }}
          />
        </a>
      </Link>
      <div className="collapse ml-5 navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              Genre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              View Plans
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
