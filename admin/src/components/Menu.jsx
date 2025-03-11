import { FaBox, FaChartBar, FaClipboard, FaClipboardList, FaCog, FaElementor, FaHdd, FaHome, FaSignOutAlt, FaUser, FaUsers } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <div className="vh-100 bg-light p-3 shadow-lg" style={{ width: "350px" }}>
      <ul className="nav flex-column mt-3">
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark"
          style={{ transition: "background-color 0.2s, color 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f9a8d4"; e.currentTarget.style.color = "#fff"; }} 
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = ""; }}
          >
            <FaHome className="me-2 text-primary" />
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaUser className="me-2 text-primary" />
            Profile
          </a>
        </li>
        <hr className="my-3" />
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaUsers className="me-2 text-primary" />
            Users
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaBox className="me-2 text-primary" />
            Products
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaClipboardList className="me-2 text-primary" />
            Orders
          </a>
        </li>
        <hr className="my-3" />
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaElementor className="me-2 text-primary" />
            Banners
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaCog className="me-2 text-primary" />
            Settings
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaHdd className="me-2 text-primary" />
            Backups
          </a>
        </li>
        <hr className="my-3" />
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaChartBar className="me-2 text-primary" />
            Charts
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-dark">
            <FaClipboard className="me-2 text-primary" />
            All Logs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link d-flex align-items-center text-danger">
            <FaSignOutAlt className="me-2" />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
