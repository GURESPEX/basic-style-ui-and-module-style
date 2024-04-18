import {
  FaArrowUp,
  FaArrowDown,
  FaRegCalendar,
  FaCaretRight,
} from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";

import MovementDetail from "./MovementDetail";
import Screen from "./Screen";

export default function ScreenOne() {
  return (
    <Screen>
      <div className="flex flex-col">
        <div className="flex flex-row items-center p-4">
          <div className="flex-1">
            <h1 className="font-semibold text-lg text-cyan-800">
              All my accounts
            </h1>
            <div className="text-xs text-slate-400">June 10, 2018</div>
          </div>
          <div className="text-2xl text-cyan-800">
            <FiBarChart2 />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row">
            <div className="flex w-full flex-row px-4 relative">
              <div className="h-4/5 absolute bg-cyan-600 w-2 left-0 opacity-25 rounded-e-md top-1/2 -translate-y-1/2"></div>
              <div className="flex flex-col w-full aspect-video bg-gradient-to-r from-cyan-800 to-cyan-950 rounded-md p-8 gap-4 drop-shadow-lg">
                <div className="flex flex-row justify-between items-end">
                  <div className="flex flex-col gap-4">
                    <img
                      className="w-[56px]"
                      src="./visa-svgrepo-com.svg"
                      alt="Visa Logo"
                    />
                    <img
                      className="w-[48px]"
                      src="./gold-leaf.png"
                      alt="Visa Logo"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-yellow-200 font-thin">
                      Available Balance
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-row justify-center items-center bg-cyan-950 text-white aspect-square w-6 rounded-full">
                        $
                      </div>
                      <div className="text-white font-thin text-2xl">
                        7,392.00
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="h-4/5 absolute bg-cyan-600 w-2 left-full opacity-25 rounded-s-md top-1/2 -translate-y-1/2 -translate-x-full"></div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <div className="w-1.5 aspect-square bg-cyan-700 opacity-10 rounded-full"></div>
            <div className="w-1.5 aspect-square bg-cyan-700 opacity-50 rounded-full"></div>
            <div className="w-1.5 aspect-square bg-cyan-700 opacity-10 rounded-full"></div>
          </div>
        </div>
        <div className="px-4 my-6">
          <div className="flex flex-row items-center w-full p-4 gap-4 bg-white border drop-shadow-sm rounded-md">
            <div className="flex flex-col flex-1 items-center gap-2">
              <div className="px-4 py-1 border rounded-full text-xs font-semibold text-cyan-700">
                Income
              </div>
              <div className="flex flex-row items-center gap-2 text-green-600 font-semibold">
                <div className="">
                  <FaArrowUp />
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
                  <FaArrowDown />
                </div>
                <div className="">$2,790.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row items-center gap-4">
            <div className="flex-1 font-semibold text-md text-cyan-800">
              Detail of movements
            </div>
            <div className="flex text-cyan-800 text-xl">
              <FaRegCalendar />
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
