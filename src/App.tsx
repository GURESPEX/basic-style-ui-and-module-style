import WK01Page from "@pages/WK01Page";
import WK02Page from "@pages/WK02Page";
import WK03Page from "@pages/WK03Page";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "1280px",
        }}
      >
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <Link
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #0002",
              borderRadius: "0.5rem",
            }}
            to={"/wk-01"}
          >
            Workshop 1
          </Link>
          <Link
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #0002",
              borderRadius: "0.5rem",
            }}
            to={"/wk-02"}
          >
            Workshop 2
          </Link>
          <Link
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #0002",
              borderRadius: "0.5rem",
            }}
            to={"/wk-03"}
          >
            Workshop 3
          </Link>
        </nav>
        <Routes>
          <Route path="/wk-01" element={<WK01Page />} />
          <Route path="/wk-02" element={<WK02Page />} />
          <Route path="/wk-03" element={<WK03Page />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
