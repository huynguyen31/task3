import './App.css';
import '@aws-amplify/ui-react/styles.css';
import config from './aws-exports.js';
import { Amplify } from 'aws-amplify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './create-blog'
import Home from './Home';

Amplify.configure(config)

function App() {
  return (
    <div className="App">
      {/* Routing page */}
      <Router>
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
{/* 
        <Routes>
          <Route path="/:id" element={<BlogDetail/>}></Route>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
