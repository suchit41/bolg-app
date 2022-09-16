import './App.css';
import {BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import BlogPage from './Pages/BlogPage';
import LoginPage from './Pages/LoginPage';
import Header from './Pages/Header';

function App() {
  return (
    
      <Router>
       <Header></Header>
        <Routes>
          <Route path='/'element={<HomePage></HomePage>}></Route>
          <Route path="/BlogPage" element={<BlogPage></BlogPage>}></Route>
          <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
          
        </Routes>
      </Router>

  
  );
}

export default App;
