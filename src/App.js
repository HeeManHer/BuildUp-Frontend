import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLayout from "./layouts/ProjectLayout";
import MypageLayout from "./layouts/MypageLayout";


import LoginLayout from "./layouts/LoginLayout";

import Backlog from "./Pages/backlog/Backlog";
import Issue from "./Pages/issue/Issue";
import SprintList from "./Pages/sprint/SprintList";
import NewProject from "./Pages/project/NewProject";
import Manager from "./Pages/project/Manager";
import MyPage from "./Pages/mypage/mypage";
import Login from "./Pages/login/login";
import Changepassword from "./Pages/login/changepassword";
import Findpassword from "./Pages/login/findpassword";
import ContactUs from "./Pages/login/email";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
        </Route>
        {/* <Route pate="/" element={<MypageLayout/>}>
          <Route index element={<}
        </Route> */}

        <Route path="/" element={<MypageLayout />}>
          <Route index element={<NewProject />} />
          <Route path="mypage">
            <Route index element={<MyPage />} />
          </Route>
        </Route>

        <Route path="/project" element={<ProjectLayout />} >
          <Route path="backlog">
            <Route index element={<Backlog />} />
          </Route>
          <Route path="issue">
            <Route index element={<Issue />} />
          </Route>
          <Route path="sprint">
            <Route index element={<SprintList />} />
          </Route>
          <Route path="Manager">
            <Route index element={<Manager />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;