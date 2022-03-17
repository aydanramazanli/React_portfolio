import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


// const url = axios("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903")
// const items =  axios("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903").then(res=>res.data).then(res=>res.items).then(b=>console.log(b))
// const data = axios("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903").then(res=>res.data).then(c=>c.feed).then(s=>console.log(s))



const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [datas, setDatas] = useState(null);
  // const [items, setItems] = useState(null);
  // const [urls, setUrls] = useState(null);

  // const data = async () => {
  //   const useData = await axios(
  //     "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903"
  //   )
  //     .then((res) => res.data)
  //     .then((d) => d.items);
  //   setDatas(useData);
  //   console.log(datas);
  // };

  useEffect(() => {
     axios(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903"
    )
      .then((res) => res.data)
      .then((c) => 
      setDatas(c.items))
  }, []);


  // const blogs = async () => {
  //   try {
  //     const mediums = await axios(
  //       "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aydan2903"
  //     ).then((res) => res.data).then(response=>response.items)
  //   } catch {
  //     (err) => console.log(err);
  //   }
  // };

  // setItems(blogs)

  return <BlogContext.Provider value={{datas}}>{children}</BlogContext.Provider>;
};

export { BlogProvider, BlogContext };
