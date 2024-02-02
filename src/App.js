import "./App.css";
import CardGameMatch from "./components/CardGame";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<CardGameMatch key="oneplayer" mode="oneplayer" />}
        />
        <Route
          exact
          path="/twoplayer"
          element={
            <div className="game">
              <CardGameMatch key="twoplayer" mode="twoplayer" />
            </div>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
