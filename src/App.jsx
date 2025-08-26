import React, { useEffect, useState } from "react";
import { getPost } from "./Services/GetData";
import Card from "./Components/Card";
import AddSection from "./Components/AddSection";

const App = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <ol className="flex flex-wrap justify-around gap-3.5 py-5 px-2">
      <AddSection />

      {/* Add Section */}
      {/* Cards Section */}
      {Data.map((currEle,idx) => (
        <Card key={currEle.id} idx={idx} currEle={currEle} Data={Data} setData={setData}/>
      ))}
    </ol>
  );
};

export default App;
