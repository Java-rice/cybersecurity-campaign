import "@src/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import MainLayout from "@src/layout/MainLayout";
import Home from "@src/pages/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/learn">
              <Route path="/" element={<About/>}/>
              <Route path="/learning-materials" element={<About/>}/>
              <Route path="/crash-course" element={<About/>}/>
              <Route path="/play" element={<About/>}/>
            </Route>
            <Route path="/community">
              <Route path="/" element={<About/>}/>
              <Route path="/activities" element={<About/>}/>
              <Route path="/partners" element={<About/>}/>
              <Route path="/socials" element={<About/>}/>
            </Route>
            <Route path="/blogs">
              <Route path="/" element={<About/>}/>
              <Route path="/news" element={<About/>}/>
              <Route path="/blogs" element={<About/>}/>
              <Route path="/newsletter" element={<About/>}/>
            </Route>
            <Route path="/contacts">
              <Route path="/" element={<About/>}/>
              <Route path="/contact" element={<About/>}/>
              <Route path="/partner" element={<About/>}/>
              <Route path="/report" element={<About/>}/>
              <Route path="/feedback" element={<About/>}/>
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
