import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Screen({ children }: Props) {
  return (
    <div className="flex flex-col rounded-md border w-[390px] h-[900px] bg-slate-50 relative overflow-hidden">
      {children}
    </div>
  );
}
