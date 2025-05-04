import "@src/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import MainLayout from "@src/layout/MainLayout";
import Home from "@src/pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home/>}/>
            
          
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
