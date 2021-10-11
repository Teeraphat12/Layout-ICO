import { FC } from "react";
import Link from "next/link";


const Sidebar: FC = () => {
  return (
    <div className="fixed flex bg-gray-light w-[300px] h-full">
      <div className="flex flex-col items-center w-[76px] bg-purple-dark text-white">
        <div className="h-1/2">Logo</div>
        <div className="flex flex-col h-full justify-between items-center">
          <div className="h-4/5 flex flex-col gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>{" "}
            </div>
          </div>
          <div>Logout</div>
        </div>
      </div>
      <div className="flex flex-col justify-between pl-6">
        <div className="h-1/2">profile</div>
        <div className="flex flex-col h-full justify-between">
          <div className="h-4/5 flex flex-col gap-3">
            <div className="font-bold text-lg">Transaction management</div>
            <Link href="/transaction-management/dashboard">
              <a>
                <div>Dashboard</div>
              </a>
            </Link>
            <Link href="/transaction-management/transaction">
              <a>
                <div>Transaction</div>
              </a>
            </Link>
            <Link href="/transaction-management/create-transaction">
              <a>
                <div>Create Transaction</div>
              </a>
            </Link>
          </div>
          <div>copyright</div>
        </div>
      </div>
    </div>
    // <div className="fixed flex bg-gray-light w-[293px] h-full z-40">
    //   <div className="flex flex-col justify-between items-center pt-[10.65px] pb-[42px] w-[73px] bg-purple-dark text-white overflow-y-auto">
    //     <div>Logo</div>
    //     <div>Menu</div>
    //     <div>Logout</div>
    //   </div>
    //   <div className="flex flex-col justify-between items-center relative overflow-y-auto">
    //     <div>Copyright</div>
    //     <div>Sub menu</div>
    //     <div>Sub menu</div>
    //   </div>
    // </div>
    // <div
    //   className={cn(
    //     `fixed  top-0 bg-black md:w-[240px] h-full  z-40 overflow-y-auto text-white transform -translate-x-full md:transform md:-translate-x-0 transition duration-200 ease-in-out `
    //   )}
    // >
    //   <div>Logo </div>
    //   <ul>
    //     <li>
    //       <Link href="/">
    //         <a>Home</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/">
    //         <a>About</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/">
    //         <a>History</a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/">
    //         <a>Contract</a>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Sidebar;
