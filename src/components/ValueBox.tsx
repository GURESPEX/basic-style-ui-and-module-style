import { Value } from "@interfaces/interfaces";

const ValueBox = ({ icon, title, content }: Value) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          aspectRatio: "1/1",
          borderRadius: 9999,
          background: "#0002",
          fontSize: "xx-large",
        }}
      >
        {icon}
      </div>
      <h3 style={{ textAlign: "center", margin: 0, fontWeight: "bold" }}>
        {title}
      </h3>
      <p style={{ textAlign: "center", margin: 0, color: "#0009" }}>
        {content}
      </p>
    </div>
  );
};

export default ValueBox;
