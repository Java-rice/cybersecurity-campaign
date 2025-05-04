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
import About from "@src/pages/About/About";

import Learn from "@src/pages/Learn/Learn";
import Materials from "@src/pages/Learn/Materials";
import Course from "@src/pages/Learn/Course";
import Play from "@src/pages/Learn/Play";

import Community from "@src/pages/Community/Community";
import Activities from "@src/pages/Community/Activities";
import Partners from "@src/pages/Community/Partners";
import Social from "@src/pages/Community/Social";

import Blog from "@src/pages/Blogs/Blog"
import Blogs from "@src/pages/Blogs/Blogs";
import News from "@src/pages/Blogs/News";
import NewsLetters from "@src/pages/Blogs/NewsLetters";

import Contacts from "@src/pages/Contacts/Contacts";
import Partner from "@src/pages/Contacts/Partner";
import Report from "@src/pages/Contacts/Report";
import Feedback from "@src/pages/Contacts/Feedback";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/learn">
              <Route index element={<Learn/>}/>
              <Route path="learning-materials" element={<Materials/>}/>
              <Route path="crash-course" element={<Course/>}/>
              <Route path="play" element={<Play/>}/>
            </Route>
            <Route path="/community">
              <Route index element={<Community/>}/>
              <Route path="activities" element={<Activities/>}/>
              <Route path="partners" element={<Partners/>}/>
              <Route path="socials" element={<Social/>}/>
            </Route>
            <Route path="/blog">
              <Route index element={<Blog/>}/>
              <Route path="news" element={<News/>}/>
              <Route path="blogs" element={<Blogs/>}/>
              <Route path="newsletter" element={<NewsLetters/>}/>
            </Route>
            <Route path="/contacts">
              <Route index element={<Contacts/>}/>
              <Route path="partner" element={<Partner/>}/>
              <Route path="report" element={<Report/>}/>
              <Route path="feedback" element={<Feedback/>}/>
            </Route>

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
