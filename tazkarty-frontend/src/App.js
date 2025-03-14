import './App.css';
import EventsContainer from './components/EventsContainer/EventsContainer.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/landing-page/Body/Body.jsx';

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}/>
          <Route path="/event-details/:eventId" element={<Body />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<EventsContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
