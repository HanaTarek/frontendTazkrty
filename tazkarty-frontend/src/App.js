import './App.css';
import EventsContainer from './components/EventsContainer/EventsContainer.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (


    <BrowserRouter>
      <Routes>
       
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<EventsContainer />} />
          <Route path="/" element={<Body />} />
          <Route path="/events/:eventname" element={<Events />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
