import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InventoryForm from "./pages/InventoryForm";
import Inventory from "./pages/Inventory";
import RemovedItems from "./pages/RemovedItems";
import RemainingItems from "./pages/RemainingItems";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/removed">Removed Items</Link>
              </li>
              <li>
                <Link to="/remaining">Remaining Items</Link>
              </li>
              <li>
                <Link to="/">Add New Item</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<InventoryForm />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/removed" element={<RemovedItems />} />
          <Route path="/remaining" element={<RemainingItems />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
