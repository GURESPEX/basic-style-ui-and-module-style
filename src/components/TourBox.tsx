import { Tour } from "@interfaces/interfaces";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const TourBox = ({ img, title, price, star }: Tour) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "222px",
        borderRadius: "1rem",
        overflow: "hidden",
        outline: "2px solid #0002",
        outlineOffset: "-2px",
        gap: "1rem",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          aspectRatio: "1/1",
          overflow: "hidden",
        }}
      >
        <img style={{ width: "100%" }} src={img} alt={title} />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
            padding: "0.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fff",
              background: "#7777",
              padding: "0.5rem 1rem",
              borderRadius: 9999,
              fontSize: "small",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{star.toFixed(1)}</div>
            <FaStar />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "medium" }}>{title}</h3>
          <p style={{ margin: 0 }}>$ {price}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 32,
              aspectRatio: "1/1",
              borderRadius: 9999,
              border: "none",
              background: "#000",
              fontSize: "large",
              color: "#fff",
            }}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourBox;
