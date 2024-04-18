import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
        padding: "4rem 0",
      }}
    >
      {children}
    </main>
  );
};

export default Main;
