import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { MainPageType } from "./types/mainPage.d";
import Main from "./components/Main";


function App() {
  const [mainPage, setMainPage] = useState<MainPageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://mongo-production-7871.up.railway.app/api/job-get?page=${page}`
        );
        const newData = response.data.jobs
        setMainPage((prevData) => prevData.concat(newData));
        setLoading(false); 
        console.log(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [page]);

 

  return (
    <div className=" bg-[#F4F6F8] h-full ">
      <Header />
      <Main mainPage={mainPage} setPage={setPage} page={page}/>
    </div>
  );
}

export default App;