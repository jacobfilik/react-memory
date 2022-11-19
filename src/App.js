import "./App.css";
import CardGameMatch from "./CardGame";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="game">
              <CardGameMatch />
            </div>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
