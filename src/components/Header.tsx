import headerImage from "@assets/background.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div
        style={{
          position: "relative",
          borderRadius: "2rem",
          overflow: "hidden",
        }}
      >
        <img style={{ width: "100%" }} src={headerImage} alt="Header Image" />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "6rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "3rem",
            }}
          >
            <h1 style={{ fontSize: "4.5rem", margin: 0, fontWeight: "bold" }}>
              Explore the sights of the Azores
            </h1>
            <p style={{ fontSize: "medium", margin: 0, color: "#fff" }}>
              A place where nature and anventure unite
            </p>
            <button
              style={{
                fontSize: "medium",
                fontWeight: "bold",
                padding: "1rem 4rem",
                border: "none",
                background: "#fff",
                borderRadius: "1rem",
              }}
            >
              Book now
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 53,
                aspectRatio: "1/1",
                borderRadius: 9999,
                border: "2px solid #fff",
                background: "none",
                fontSize: "x-large",
                color: "#fff",
              }}
            >
              <BsArrowLeft />
            </button>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 53,
                aspectRatio: "1/1",
                borderRadius: 9999,
                border: "none",
                background: "#000",
                fontSize: "x-large",
                color: "#fff",
              }}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
