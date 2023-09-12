import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { MainPageType } from "./types/mainPage.d";
import Main from "./components/Main";
import Popup from "./components/Popup";

function App() {
  const [mainPage, setMainPage] = useState<MainPageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [allElements, setAllElements] = useState<MainPageType[]>([])
  const [popUp, setPopUp] = useState<boolean>(false)
  const [filter, setFilter] = useState<string>('')
  const [fullTime, setFullTime] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mongo-production-7871.up.railway.app/api/job-get?page=${page}`
        );

        const responseAll = await axios.get('https://mongo-production-7871.up.railway.app/api/all-job')

        const allData = responseAll.data.jobs
        const newData = response.data.jobs;

        setMainPage((prevData) => prevData.concat(newData)) 
        setAllElements(allData)
        setLoading(false);
        console.log(responseAll.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page]);

  
  return ( 
    <div className={`bg-[#F4F6F8] h-full`}>
      <Popup popUp={popUp} setPopUp={setPopUp} setFilter={setFilter} setFullTime={setFullTime} fullTime={fullTime}/>
      <div className={` ${popUp ? " blur-md pointer-events-none " : null} `}>
      <Header setSearch={setSearch} setPopUp={setPopUp} />
      <Main filter={filter} mainPage={mainPage} setPage={setPage} allElements={allElements}  page={page} search={search} fullTime={fullTime} />
      </div>
    </div>
  );
}

export default App;