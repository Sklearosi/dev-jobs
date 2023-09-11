import { useState } from "react";

interface MainProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<MainProps> = ({ setSearch, setPopUp }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="">
      <div
        style={{ backgroundImage: "url(assets/mobile/bg-pattern-header.svg)" }}
        className=" w-full h-[136px] bg-cover bg-center "
      >
        <div className=" flex w-[90%] justify-between m-auto items-center  pt-7">
          <p className=" font-[600] text-white text-[25px] ">devjobs</p>
          <div className=" flex w-[112px] h-6 justify-between items-center ">
            <img src="assets/desktop/icon-sun.svg" alt="" />
            <label
              htmlFor="toggle"
              className=" w-12 h-6 bg-white rounded-[12px] relative"
            >
              <div
                className={` transition-all duration-500 w-[14px] h-[14px] bg-[#5964E0] rounded-full absolute top-0 bottom-0 m-auto  ${
                  !toggle ? "ml-[3px]" : "ml-[31px]"
                } `}
              ></div>
            </label>
            <input
              onChange={() => {
                setToggle(!toggle);
              }}
              className="hidden"
              type="checkbox"
              id="toggle"
            />
            <img src="assets/desktop/icon-moon.svg" alt="" />
          </div>
        </div>
        <div className=" w-[87%] h-[80px] bg-white flex items-center m-auto rounded-xl mt-7 ">
          <div className=" flex w-[90%] justify-between items-center m-auto ">
            <input
              className=" outline-none"
              placeholder="Filter by title…"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <div className="flex w-24 justify-between items-center">
              <img src="assets/mobile/icon-filter.svg" alt="" onClick={() => {
                setPopUp(true)
              }} />
              <div className=" w-12 h-12  rounded-xl flex items-center justify-center bg-[#5964E0] ">
                <img src="assets/desktop/icon-search.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
