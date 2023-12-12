import { useState } from "react";
import axios from "axios";

const useData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error , setError] = useState("")

  const fetchData = async () => {
      setIsLoading(true)
      console.log(url)
      try {
          const response = await axios.get(url);
          await setData(response.data);
          setIsLoading(false)
          console.log(data)
    } catch (e) {
      setError(e);
    }
  };


  return {fetchData , data, isLoading , error}
};
export default useData