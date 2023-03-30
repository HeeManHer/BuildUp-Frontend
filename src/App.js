import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectLayout from "./layouts/ProjectLayout";
import MypageLayout from "./layouts/MypageLayout";
import Main from "./Pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MypageLayout />}>
          <Route index element={<Main />} />
          <Route path="project">
            <Route index element={<Main />} />
          </Route>
          <Route path="mypage">
            <Route index element={<Main />} />
          </Route>
        </Route>

        <Route path="/project" element={<ProjectLayout />} >
          <Route index element={<Main />} />
          <Route path="backlog">
            <Route index element={<Main />} />
          </Route>
          <Route path="issue">
            <Route index element={<Main />} />
          </Route>
          <Route path="sprint">
            <Route index element={<Main />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
