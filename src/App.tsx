import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { MainPageType } from "./types/mainPage.d";
import Main from "./components/Main";


function App() {
  const [mainPage, setMainPage] = useState<MainPageType[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mongo-production-7871.up.railway.app/api/job-get"
        );
        setMainPage(response.data.jobs);
        setLoading(false); 
        console.log(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" bg-[#F4F6F8] h-[100vh]">
      <Header />
      <Main mainPage={mainPage}/>
    </div>
  );
}

export default App;