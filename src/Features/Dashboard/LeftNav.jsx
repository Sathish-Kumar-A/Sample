import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const LeftNav = () => {
    const navElements = [{
        path: "/",
        label: "Dashboard"
    }]
    const location = useLocation();
    const url = location.pathname;

    return (
      <div
        style={{
          width: "20%",
          backgroundColor: "#053B50",
          height: "100vh",
          position: "sticky",
          top: "0",
        }}
      >
            <div style={{
                display: "flex",
                justifyContent: "center",
                padding: "20px 0",
                alignItems:"end"
        }}>
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "60px",
                width: "60px",
              marginRight:"10px"
            }}
                />
        </div>
        <div>
          {navElements.map((nav, index) => (
            <NavLink
              to={nav.path}
              key={index}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  marginTop: "10px",
                  // width: "100%",
                  ...(url.includes(nav.path) && {
                    backgroundColor: "#176B87",
                  }),
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                >
                  {nav.label}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
}

export default LeftNav