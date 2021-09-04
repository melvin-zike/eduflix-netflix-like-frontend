import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import { useState, useEffect } from "react";
import List from "../../components/list/List";
import axios from "axios";
//import { ListSharp } from "@material-ui/icons";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : "" }`, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMzM0MmM3MjkxZTJmMzJjY2I5ZDMxOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzA3NDk0MDcsImV4cCI6MTYzODUyNTQwN30.-ji4_BegUJcA-pioeKQO_a-RuQ0WgxQQi4TmJ3Tl5Ak"
          }
        });
        // console.log(res)
        setLists(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getRandomLists();
  }, [type, genre])
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre}/>
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
      
      
      
    </div>
  );
};

export default Home;