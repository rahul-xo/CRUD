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
<div className="flex flex-wrap justify-around gap-3.5 py-5 px-2">
  
  {/* Add Section */}
  <AddSection/>

  {/* Cards Section */}
  {Data.map((currEle) => (
    <Card key={currEle.id} currEle={currEle} />
  ))}
</div>
  );
};

export default App;
