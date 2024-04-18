import { Tour, Value } from "@interfaces/interfaces";
import ValueBox from "@components/ValueBox";
import TourBox from "@components/TourBox";
import { tours, values } from "@data/data";
import Navigation from "@components/Navigation";
import Header from "@components/Header";
import Main from "@components/Main";

const WK02Page = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", padding: "0 2rem" }}
    >
      <Navigation />
      <Header />
      <Main>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <h2 style={{ fontSize: "2.5rem", margin: 0, fontWeight: "bold" }}>
              Top values for you
            </h2>
            <p style={{ fontSize: "medium", margin: 0, color: "#0009" }}>
              Try variety of benefits when using our services
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "4rem",
            }}
          >
            {values.map((value: Value) => (
              <ValueBox {...value} />
            ))}
          </div>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                margin: 0,
                width: "100%",
                fontWeight: "bold",
              }}
            >
              Choose your tour
            </h2>
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
              {tours.map((tour: Tour) => (
                <TourBox {...tour} />
              ))}
            </div>
            <button
              style={{
                fontSize: "large",
                fontWeight: "bold",
                padding: "1rem 3rem",
                border: "1px solid #000",
                background: "none",
                borderRadius: 9999,
              }}
            >
              See all
            </button>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default WK02Page;
