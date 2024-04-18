import { navMenus } from "@data/data";
import { TfiMenuAlt } from "react-icons/tfi";

const Navigation = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 0",
        background: "#fff",
      }}
    >
      <div style={{ fontSize: "x-large", fontWeight: "bold" }}>IsLand</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {navMenus.map(({ name }) => (
          <button
            style={{
              background: "none",
              border: "none",
              fontSize: "medium",
              fontWeight: "bold",
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: "x-large",
          }}
        >
          <TfiMenuAlt />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
