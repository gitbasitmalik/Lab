import { Routes , Route } from "react-router-dom";
import Main from "./Main";
import QAETrophy from "./QAETrophy";
import IosApp from "./IosApp";

function App() 
{
  return ( 
    <div>
     <Routes>
      <Route path="/QAETrophy" element={<QAETrophy/>}/>
      <Route path="/IosApp" element={<IosApp/>}/>
     </Routes>
      <Main/>
    </div>
   );
}

export default App;