
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";
import PostDetails from "./Components/PostDetails/PostDetails";



function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/post/:id' element={<PostDetails/>} />
      </Routes>
            
              
    </div>
  );
}

export default App;
