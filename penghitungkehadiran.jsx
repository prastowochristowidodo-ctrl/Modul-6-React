import { useState } from "react";
import "./App.css";

function App() {
  const [hadir, setHadir] = useState(0);

  function tambah() {
    setHadir((nilai) => Math.min(nilai + 1, 30));
  }

  function kurangi() {
    setHadir((nilai) => Math.max(nilai - 1, 0));
  }

  function reset() {
    setHadir(0);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Penghitung Kehadiran</h2>
        <h1>{hadir}</h1>
        <p>Batas kehadiran: 0 sampai 30</p>

        <button onClick={tambah}>Tambah</button>{" "}
        <button onClick={kurangi}>Kurangi</button>{" "}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;