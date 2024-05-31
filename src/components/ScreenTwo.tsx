import {
  FaArrowUp,
  FaArrowDown,
  FaRegCalendar,
  FaCaretRight,
  FaChevronDown,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

import MovementDetail from "./MovementDetail";
import Screen from "./Screen";
import { useEffect, useRef, useState } from "react";

export default function ScreenTwo() {
  const IE = useRef(null);
  const [IEHeight, setIEHeight] = useState(0);

  console.log(IE);

  useEffect(() => {
    setIEHeight(IE.current ? IE.current.offsetHeight : 0);
  }, []);

  return (
    <Screen>
      <div
        style={{ paddingBottom: IEHeight / 2 + 16 }}
        className="relative bg-gradient-to-b from-cyan-800 to-cyan-950"
      >
        <div className="flex flex-row justify-between items-center p-4 text-white">
          <div className="text-2xl">
            <HiMenuAlt1 />
          </div>
          <div className="text-2xl">
            <FaRegCalendar />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-2">
              <div className="text-xs text-yellow-200 font-thin">
                Available Balance
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-row justify-center items-center bg-cyan-950 text-white aspect-square w-6 rounded-full">
                  $
                </div>
                <div className="text-white font-thin text-3xl">7,392.00</div>
              </div>
              <div className="flex font-thin text-sm text-white mix-blend-overlay">
                June 8, 2018
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col rounded-md p-4 mx-6 gap-2 bg-white bg-opacity-10 border border-white border-opacity-5 drop-shadow-sm">
              <div className="flex flex-row justify-between text-white font-thin text-2xl">
                <div className="flex flex-row">42012</div>
                <div className="flex flex-row">3049</div>
                <div className="flex flex-row">2800</div>
                <div className="flex flex-row">9815</div>
              </div>
              <div className="flex flex-row justify-between text-xs text-white uppercase">
                <div className="flex flex-row items-center gap-2">
                  <div>Expire</div>
                  <FaCaretRight />
                  <div>02/22</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div>CVC CODE</div>
                  <FaCaretRight />
                  <div>230</div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={IE}
            className="absolute w-full top-full -translate-y-1/2 px-4"
          >
            <div className="flex flex-row items-center w-full p-4 gap-4 bg-white border drop-shadow-sm rounded-md">
              <div className="flex flex-col flex-1 items-center gap-2">
                <div className="px-4 py-1 border rounded-full text-xs font-semibold text-cyan-700">
                  Income
                </div>
                <div className="flex flex-row items-center gap-2 text-green-600 font-semibold">
                  <div className="">
                    <FaArrowDown />
                  </div>
                  <div className="">$9,302.00</div>
                </div>
              </div>
              <div className="w-[1px] bg-slate-200 h-1/2"></div>
              <div className="flex flex-col flex-1 items-center gap-2">
                <div className="px-4 py-1 border rounded-full text-xs font-semibold text-cyan-700">
                  Expense
                </div>
                <div className="flex flex-row items-center gap-2 text-red-600 font-semibold">
                  <div className="">
                    <FaArrowUp />
                  </div>
                  <div className="">$2,790.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: IEHeight / 2 + 16 }} className="flex flex-col">
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row items-center gap-4">
            <div className="flex-1 font-semibold text-md text-cyan-800">
              Detail of movements
            </div>
            <div className="flex text-cyan-800 items-center text-sm gap-2">
              <div>Weekly</div>
              <div>
                <FaChevronDown />
              </div>
            </div>
          </div>
          <MovementDetail
            icon={<img src="./restuarant.png" alt="Resturant Manhattan" />}
            title={"Resturant Manhattan"}
            date={"June 10, 2018"}
            price={170}
          />
          <MovementDetail
            icon={<img src="./hand-hold-money.png" alt="Salary Deposit" />}
            date={"June 1, 2018"}
            price={1200}
            deposit={true}
          />
          <MovementDetail
            icon={<img src="./shop-bag.png" alt="Central Market" />}
            title={"Central Market"}
            date={"May 28, 2018"}
            price={50}
          />
          <MovementDetail
            icon={<img src="./icon-coins.png" alt="Salary Deposit" />}
            date={"May 1, 2018"}
            price={1200}
            deposit={true}
          />
          <MovementDetail
            icon={<img src="./shop-bag.png" alt="Central Market" />}
            title={"Central Market"}
            date={"June 1, 2018"}
            price={37}
          />
        </div>
      </div>
    </Screen>
  );
}
