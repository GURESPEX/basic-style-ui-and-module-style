import buttonStyle from "@css/Button.module.css";

const WK01Page = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <button className={buttonStyle.btn1}>Click Me</button>
        </li>
        <li>
          <button className={buttonStyle.btn2}>Click Me</button>
        </li>
        <li>
          <button className={buttonStyle.btn3}>Click Me</button>
        </li>
        <li>
          <button className={buttonStyle.btn4}>Click Me</button>
        </li>
      </ul>
    </div>
  );
};

export default WK01Page;
