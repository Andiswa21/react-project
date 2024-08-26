import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration';
import Login from './Components/Login';
import RecipeBoard from './Components/RecipeBoard';
// import NotFound from './Components/NotFound'; // A component to handle unmatched routes

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<RecipeBoard />} />
        {/* <Route path="*" element={<NotFound />} /> Fallback for unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
