import axios from "axios";
import React, { useEffect, useState } from "react";

const Promises = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

    const fetchData1 = async () => {
      try {
        const mdata = await axios.get("https://opentdb.com/api.php?amount=10");
        console.log(mdata);
        const data = await mdata.data;
        console.log(data);
        const cdata = await data.results;
        console.log(cdata);
      } catch (error) {
        console.log("error");
      }

    };

  const fetchData = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((response) => {
        var data = response.data;
        console.log(data);
        return data;
      })
      .then((data) => {
        var mydata = data.results;
        console.log(mydata);
        return mydata;
      })
      .then((mydata) => {
        var cat = mydata[0].category;
        console.log(cat);
      })
      .catch(() => console.log("error"));
  };

  return <div>Promises</div>;
};

export default Promises;
