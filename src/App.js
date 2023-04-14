import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLayout from "./layouts/ProjectLayout";
import MypageLayout from "./layouts/MypageLayout";


import LoginLayout from "./layouts/LoginLayout";

import Backlog from "./Pages/backlog/Backlog";
import Issue from "./Pages/issue/Issue";
import SprintList from "./Pages/sprint/SprintList";
import SprintOne from "./Pages/sprint/SprintOne";
import NewProject from "./Pages/project/NewProject";
import Manager from "./Pages/project/Manager";
import MyPage from "./Pages/mypage/mypage";
import Login from "./Pages/login/login";
import Changepassword from "./Pages/login/changepassword";
import Findpassword from "./Pages/login/findpassword";
import ContactUs from "./Pages/login/email";
import firstpage from "./Pages/login/FirstPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="findpassword" element={<Findpassword/>}/>
         </Route> 

        <Route path="/" element={<MypageLayout />}>
          <Route index element={<NewProject />} />
          <Route path="mypage">
            <Route index element={<MyPage />} />
            <Route path="changepassword" element={<Changepassword/>} />
          </Route>
        </Route>

        <Route path="/project" element={<ProjectLayout />} >
          <Route path=":projectNo" >
            <Route path="backlog" element={<Backlog />} />
            <Route path="issue" element={<Issue />} />
            <Route path="sprint" element={<SprintList />} />
            <Route path="sprintOne" element={<SprintOne />} />
            <Route path="Manager" element={<Manager />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;