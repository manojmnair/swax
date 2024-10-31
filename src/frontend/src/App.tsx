import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Profile from './pages/Profile';
import BondToken from './pages/BondToken';
import Holdings from './pages/Holdings';
import GoldToken from './pages/GoldToken';
import Comingsoon from './pages/Comingsoon';
import Header from "./components/header/Header";
import { DashBoardLayout } from "./Layout";


function App() {
  return (
    <Router>
      <div className="flex flex-col items-center w-full">
        <Header />
        <div className="flex flex-col items-center w-full gap-5 p-2 justify-between">
          <Routes>
            <Route element={<DashBoardLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/bondtoken" element={<BondToken />} />
              <Route path="/goldtoken" element={<GoldToken />} />
              <Route path="/comingsoon" element={<Comingsoon />} />
            </Route>
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
