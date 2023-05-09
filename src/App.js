import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Workout from "./pages/Workouts/Workout";
import Profile from "./pages/Profile/Profile";
import AddWorkout from "./pages/AddWorkout/AddWorkout";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="*" element={<Login/>}/>

            <Route path="/register" element={<Register/>}/>

            <Route path="/home" element={<Home/>}/>

            <Route path="/workout" element={<Workout/>}/>

            <Route path="/profile" element={<Profile/>}/>

            <Route path="/add-workout" element={<AddWorkout/>}/>
        </Routes>
    </div>
  );
}

export default App;
