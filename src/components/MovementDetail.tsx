import { ReactNode } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

type Props = {
  icon: ReactNode;
  title?: string;
  date: string;
  price: number;
  deposit?: boolean;
};

export default function MovementDetail({
  icon,
  title,
  date,
  price,
  deposit,
}: Props) {
  return (
    <>
      <div className="flex flex-row p-4 bg-white border drop-shadow-sm rounded-md">
        <div className="flex flex-1 flex-row gap-4">
          <div className="flex flex-row justify-center items-center aspect-square w-8">
            {icon}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <h1 className="font-semibold text-sm">
                {deposit ? "Salary Deposit" : title}
              </h1>
              <div className="text-xs text-slate-400">{date}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div
            className={`flex flex-row gap-2 ${
              deposit ? "text-green-600" : "text-red-600"
            } font-semibold items-center`}
          >
            <div className="">${price}</div>
            <div className="">{deposit ? <FaArrowUp /> : <FaArrowDown />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
