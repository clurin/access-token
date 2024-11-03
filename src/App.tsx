import './App.css';
import { Route, Routes } from 'react-router';
import SingUpPage from './pages/SingUpPage';
import LogInPage from './pages/LogInPage';
import MenuBar from './features/components/MenuBar/MenuBar';
import ShowUsers from './features/users/components/ShowUsers';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/singup" element={<SingUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
      <ShowUsers />
    </div>
  )
}

export default App;
