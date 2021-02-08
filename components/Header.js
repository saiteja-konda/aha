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
      class="navbar sticky-top  navbar-expand-lg "
    >
      <Link href="/">
        <a className="navbar-brand ml-5">
          <img
            src="/Aha/misc/logo.png"
            style={{
              width: "75px",
              height: "100%",
            
            }}
          />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
      </button>
      <div className="collapse navbar-collapse ml-5" id="navbarNavDropdown">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link mr-2 ml-2"
                style={{ fontSize: "18px" }}
                href="#"
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mr-2 ml-2"
                style={{ fontSize: "18px" }}
                href="#"
              >
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mr-2 ml-2"
                style={{ fontSize: "18px" }}
                href="#"
              >
                Shows
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mr-2 ml-2  "
                style={{ fontSize: "18px" }}
                href="#"
              >
                Genre
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mr-2 ml-2 "
                style={{ fontSize: "18px" }}
                href="#"
              >
                View Plans
              </a>
            </li>
          </ul>
        </div>
      </div>
        <i
          style={{ fontSize: "22px" }}
          className="fas fa-search position-relative text-light mr-5"
          aria-hidden="true"
        ></i>
        <i
          className="fas fa-globe position-relative text-light m-2"
          aria-hidden="true"
          style={{ fontSize: "22px" }}
        ></i>{" "}
        EN
        <span
          className="mr-4 ml-4"
          style={{ fontSize: "14px", fontWeight: "lighter" }}
        >
          SIGN IN
        </span>
        <div className="form-inline">
          <button
            style={{ backgroundColor: "#ff6c2f", color: "#fff" }}
            className="btn btn-block my-2 my-sm-0"
            type="submit"
          >
            Subscribe Now
          </button>
        </div>
    </nav>
  );
};

export default Header;
