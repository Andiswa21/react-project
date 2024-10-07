import { useState } from "react";
import NavBar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";


const App = () => {
  const [category , setCategory] = useState()
  console.log('lee',category)
  return (  
    <>
    <NavBar /> {/*  setCategory={setCategory}*/}
    <NewsBoard category = {category}/>
    </>
  );
}
 
export default App;