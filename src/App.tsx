import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { MainPageType } from "./types/mainPage.d";

function App() {

  const [mainPage, setMainPage] = useState<MainPageType[]>([])
  
  const getData = async () => {
    try {
      const response = await axios.get('https://mongo-production-7871.up.railway.app/api/job-get')

      setMainPage(response.data)
      console.log(mainPage);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
getData()
  }, [])

  return (
    <div className=" bg-[#F4F6F8] h-[100vh]">
      <Header/>


    </div>
  );
}

export default App;
