import ItemDetailContainer from "./src/components/ItemDetailContainer.jsx";
import ItemListContainer from "./src/components/ItemListContainer.jsx";
import NavBar from  "./src/components/NavBar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/> }/>
        <Route path="/item" element={<ItemDetailContainer itemId={2}/>}/>
      </Routes>
      
      
    </BrowserRouter>
  </>
  )
}

export default App;