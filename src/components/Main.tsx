import { useState } from "react";
import { MainPageType } from "../types/mainPage.d";

interface MainProps {
  mainPage: MainPageType[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

const Main: React.FC<MainProps> = ({ mainPage, setPage, page}) => {

  const loadMore = () => {
    setPage(page + 1)
    console.log(page);
    
  }

  return (
    <div className="  bg-[#F4F6F8] pb-10">
      <ul className="mt-20 w-[87%] m-auto grid gap-[40px]">
        {mainPage.map((jobs, index) => {
          return (
            <li key={index} className=" bg-white rounded-xl  h-[250px]">
                <div style={{backgroundColor: jobs.logoBackground}} className=" w-[50px] h-[50px] rounded-[14px] flex justify-center items-center -mt-[24px] ml-7 ">
              <img src={jobs.logo} alt="" />
              </div>
              <div className=" w-[85%] ml-7 ">
                <div className=" flex justify-between items-center w-[150px] mt-4 text-[16px] font-[400] text-[#6E8098] ">
                  <p>{jobs.postedAt}</p>
                  <div className=" bg-[#6E8098] h-1 w-1 rounded-full mt-2 "></div>
                  <p>{jobs.contract}</p>
                </div>
                <p className=" font-[700] text-[#19202D] text-[20px] mt-2 ">{jobs.position}</p>
                <p className=" text-[16px] font-[400] text-[#6E8098] mt-2 ">{jobs.company}</p>
                <p className=" text-[14px] font-[700] text-[#5964E0] mt-12 ">{jobs.location}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className=" w-[141px] h-[48px] m-auto mt-5 bg-[#5964E0]  text-white block rounded-xl" onClick={loadMore}>Load More</button>
    </div>
  );
};

export default Main;
