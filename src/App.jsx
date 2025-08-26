import React, { useEffect } from "react";
import { getPost } from "./Services/GetData";

const App = () => {
  const fetchData = async () => {
    try {
      const res = await getPost();
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>App</div>;
};

export default App;
