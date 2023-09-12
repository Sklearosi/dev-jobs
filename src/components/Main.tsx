import { useState, useEffect } from "react";
import { MainPageType } from "../types/mainPage.d";

interface MainProps {
  mainPage: MainPageType[];
  allElements: MainPageType[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  search: string;
  filter: string;
  fullTime: boolean;
}

const Main: React.FC<MainProps> = ({
  mainPage,
  setPage,
  page,
  search,
  allElements,
  filter,
  fullTime
}) => {
  const filteredMainPage = allElements.filter((job: MainPageType) => {
    const titleMatch = job.position.toLowerCase().includes(search.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(filter.toLowerCase());
    const isFullTimeMatch = fullTime ? job.contract.toLowerCase() === "full time" : true;
  
    return titleMatch && locationMatch && isFullTimeMatch;
  });

  const loadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <div>
      {search || filter || fullTime ? <div className="bg-[#F4F6F8] pb-10">
      <ul className="mt-20 w-[87%] m-auto grid gap-[40px]">
        {filteredMainPage.map((job, index) => {
          return (
            <li key={index} className=" bg-white rounded-xl  h-[250px]">
              <div
                style={{ backgroundColor: job.logoBackground }}
                className=" w-[50px] h-[50px] rounded-[14px] flex justify-center items-center -mt-[24px] ml-7 "
              >
                <img src={job.logo} alt="" />
              </div>
              <div className=" w-[85%] ml-7 ">
                <div className=" flex justify-between items-center w-[150px] mt-4 text-[16px] font-[400] text-[#6E8098] ">
                  <p>{job.postedAt}</p>
                  <div className=" bg-[#6E8098] h-1 w-1 rounded-full mt-2 "></div>
                  <p>{job.contract}</p>
                </div>
                <p className=" font-[700] text-[#19202D] text-[20px] mt-2 ">
                  {job.position}
                </p>
                <p className=" text-[16px] font-[400] text-[#6E8098] mt-2 ">
                  {job.company}
                </p>
                <p className=" text-[14px] font-[700] text-[#5964E0] mt-12 ">
                  {job.location}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className="w-[141px] h-[48px] m-auto mt-5 bg-[#5964E0] text-white block rounded-xl"
        onClick={loadMore}
      >
        Load More
      </button>
    </div> : <div className="bg-[#F4F6F8] pb-10">
      <ul className="mt-20 w-[87%] m-auto grid gap-[40px]">
        {mainPage.map((job, index) => {
          return (
            <li key={index} className=" bg-white rounded-xl  h-[250px]">
              <div
                style={{ backgroundColor: job.logoBackground }}
                className=" w-[50px] h-[50px] rounded-[14px] flex justify-center items-center -mt-[24px] ml-7 "
              >
                <img src={job.logo} alt="" />
              </div>
              <div className=" w-[85%] ml-7 ">
                <div className=" flex justify-between items-center w-[150px] mt-4 text-[16px] font-[400] text-[#6E8098] ">
                  <p>{job.postedAt}</p>
                  <div className=" bg-[#6E8098] h-1 w-1 rounded-full mt-2 "></div>
                  <p>{job.contract}</p>
                </div>
                <p className=" font-[700] text-[#19202D] text-[20px] mt-2 ">
                  {job.position}
                </p>
                <p className=" text-[16px] font-[400] text-[#6E8098] mt-2 ">
                  {job.company}
                </p>
                <p className=" text-[14px] font-[700] text-[#5964E0] mt-12 ">
                  {job.location}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className="w-[141px] h-[48px] m-auto mt-5 bg-[#5964E0] text-white block rounded-xl"
        onClick={loadMore}
      >
        Load More
      </button>
    </div>}
    
    </div>
  );
};

export default Main;
