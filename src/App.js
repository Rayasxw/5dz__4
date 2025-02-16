import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/postsPage/PostsPage';
import PostDetails from "./components/postDetails/PostDetails";
import AppHeader from "./components/header/Header";
import { Layout } from 'antd';
// import MainPage from './pages/mainPage/MainPage';

const { Content } = Layout;

function App() {
  return (
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Routes>
            {/* <Route path="/" index element={<MainPage/>} /> */}
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/postDetails/:id" element={<PostDetails />} />
          </Routes>
        </Content>
      </Layout>
  
  );
}

export default App;
