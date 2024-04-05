import PhotoComponent from "./Component/PhotoComponent";
import TodoComponent from './Component/TodoComponent';
import { Routes, Route } from 'react-router-dom';
import Home from "./Component/Home";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/photo" element={ <PhotoComponent/>}/>
      <Route path="/todo" element={ <TodoComponent/>}/>
    </Routes>
  )
}

export default App
