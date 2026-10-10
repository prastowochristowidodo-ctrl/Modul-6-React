import { useState } from "react";
import "./App.css";

function App() {
  const [tugas, setTugas] = useState([
    { id: 1, nama: "Tugas React", selesai: false },
    { id: 2, nama: "Tugas JS", selesai: true },
    { id: 3, nama: "Tugas CSS", selesai: false },
  ]);

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("Semua");

  function tambahTugas() {
    if (input.trim() === "") return;

    setTugas((daftar) => [
      ...daftar,
      {
        id: Date.now(),
        nama: input.trim(),
        selesai: false,
      },
    ]);

    setInput("");
  }

  function ubahStatus(id) {
    setTugas((daftar) =>
      daftar.map((item) =>
        item.id === id
          ? { ...item, selesai: !item.selesai }
          : item
      )
    );
  }

  function hapusTugas(id) {
    setTugas((daftar) =>
      daftar.filter((item) => item.id !== id)
    );
  }

  const tugasDitampilkan = tugas.filter((item) => {
    if (filter === "Aktif") return !item.selesai;
    if (filter === "Selesai") return item.selesai;
    return true;
  });

  return (
    <div className="container">
      <div className="card">
        <h2>Daftar Tugas Kuliah</h2>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") tambahTugas();
          }}
          placeholder="Masukkan nama tugas"
        />

        <button onClick={tambahTugas}>Tambah</button>

        <div className="filter">
          {["Semua", "Aktif", "Selesai"].map((pilihan) => (
            <button
              key={pilihan}
              onClick={() => setFilter(pilihan)}
              disabled={filter === pilihan}
            >
              {pilihan}
            </button>
          ))}
        </div>

        <ul>
          {tugasDitampilkan.map((item) => (
            <li key={item.id}>
              <span
                onClick={() => ubahStatus(item.id)}
                className={item.selesai ? "selesai" : ""}
              >
                {item.nama}
              </span>

              <button onClick={() => hapusTugas(item.id)}>
                Hapus
              </button>
            </li>
          ))}
        </ul>

        <p>Jumlah seluruh tugas: {tugas.length}</p>
      </div>
    </div>
  );
}

export default App;