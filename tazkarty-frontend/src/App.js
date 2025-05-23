import './App.css';
import EventsContainer from './components/EventsContainer/EventsContainer.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/profile/profile.jsx';
import Signin from './components/Signin/Signin.jsx';
import History from  "./components/History/History.jsx";
import AddEvent from  "./components/Add_Event/Add_Event.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from './components/Events/Events.jsx';
import Header from './components/Header/Header.jsx';
import ContactContainer from './components/ContactContainer/ContactContainer.jsx';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Header />

            <Routes>
                <Route path="/" element={<EventsContainer />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="Signin" element={<Signin />} />
                <Route path="/events/:eventname" element={<Events />} /> 
                <Route path="/History" element={<History />} />
                <Route path="/AddEvent" element={<AddEvent />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<EventsContainer />} />
            </Routes>
        <ContactContainer />
      </div>
    </BrowserRouter>
    );
}

export default App;
