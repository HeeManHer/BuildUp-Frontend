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
// import firstpage from "./Pages/login/FirstPage";
import Firstpage from "./Pages/login/FirstPage";
import Afterchange from "./Pages/login/afterchange";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/auth" element={<LoginLayout />}>
          <Route path="login">
            <Route index element={<Login />} />
            <Route path="findPassword">
              <Route index element={<Findpassword />} />
              <Route path="afterChange" element={<Afterchange />} />
            </Route>
          </Route>
        </Route>

        <Route path="mypage" element={<MypageLayout />}>
          <Route index element={<MyPage />} />
          <Route path="changePassword" element={<Changepassword />} />
          <Route path="newProject" element={<NewProject />} />
        </Route>


        <Route path="/project" element={<ProjectLayout />} >
          <Route path=":projectNo" >
            <Route path="backlog" element={<Backlog />} />
            <Route path="issue" element={<Issue />} />
            <Route path="sprint" >
              <Route index element={<SprintList />} />
              <Route path=":sprintNo" element={<SprintOne />} />
            </Route>
            <Route path="manager" element={<Manager />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;