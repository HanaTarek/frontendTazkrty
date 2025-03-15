import './App.css';
import EventsContainer from './components/EventsContainer/EventsContainer.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Signin from './components/Signin/Signin.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/landing-page/Body/Body.jsx';
// import Signin from './components/Signin/Signin';

function App() {
  return (


    <BrowserRouter>
      <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="*" element={<EventsContainer />} />
          <Route path="/" element={<Body />} />
          <Route path="/events/:eventname" element={<Events />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
