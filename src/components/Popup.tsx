

interface MainProps{
    popUp: boolean;
    setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup : React.FC<MainProps> = ({popUp, setPopUp}) => {
    return(
        <div>
            {popUp ?  <div className=" h-[217px] w-[350px] bg-white rounded-xl absolute top-0 left-0 right-0 bottom-0 m-auto z-10 ">
            <div className=" w-full h-[70px] border-b border-[#6E8098] flex justify-left pl-6 items-center ">
                <div className=" flex  "><img src="assets/desktop/icon-location.svg" alt="" /> <input type="text" placeholder="Filter by location…" className=" outline-none ml-5 " /> </div>
            </div>
            <div className=" grid  w-[279px] m-auto mt-5 ">
                <div className=" flex "><input type="checkbox" name="" id="" /><p className=" text-[#19202D] text-[16px] font-[700] ml-5 ">Full Time Only</p></div>
                <button className=" w-full bg-[#5964E0] text-white font-[700] text-[16px] text-center h-[48px] mt-5 rounded-xl " onClick={() => {
                    setPopUp(false)
                }}>Search</button>
            </div>
        </div> : null }
       
        </div>
    )
}

export default Popup