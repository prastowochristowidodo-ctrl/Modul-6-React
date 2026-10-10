import { useState } from "react";

const dataAwal = [
  { id: 1, judul: "Belajar CSS", selesai: false },
  { id: 2, judul: "Belajar JavaScript", selesai: true },
  { id: 3, judul: "Latihan mengerjakan react", selesai: false },
];

const DAFTAR_FILTER = ["Semua", "Aktif", "Selesai"];

function ItemTugas({ tugas, onToggle, onHapus }) {
  return (
    <li className={tugas.selesai ? "selesai" : ""}>
      <input
        type="checkbox"
        checked={tugas.selesai}
        onChange={() => onToggle(tugas.id)}
        aria-label={`Selesai: ${tugas.judul}`}
      />
      <span>{tugas.judul}</span>
      <button onClick={() => onHapus(tugas.id)}>Hapus</button>
    </li>
  );
}

export default function App() {
  const [tugas, setTugas] = useState(dataAwal);
  const [judul, setJudul] = useState("");
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [idBerikut, setIdBerikut] = useState(dataAwal.length + 1);

  const tambah = (e) => {
    e.preventDefault();
    const teks = judul.trim();
    if (!teks) {
      setError("Judul tugas tidak boleh kosong.");
      return;
    }
    setTugas([...tugas, { id: idBerikut, judul: teks, selesai: false }]);
    setIdBerikut(idBerikut + 1);
    setJudul("");
    setError("");
  };

  const toggle = (id) =>
    setTugas(tugas.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t)));

  const hapus = (id) => setTugas(tugas.filter((t) => t.id !== id));

  // Filter hanya membuat daftar tampilan; state `tugas` tidak diubah.
  const tampil = tugas.filter((t) =>
    filter === "Semua" ? true : filter === "Aktif" ? !t.selesai : t.selesai
  );
  const jumlahSelesai = tugas.filter((t) => t.selesai).length;

  return (
    <main className="container">
      <h1>Daftar Tugas Kuliah</h1>

      <form className="row" onSubmit={tambah}>
        <input
          type="text"
          placeholder="Judul tugas..."
          value={judul}
          onChange={(e) => {
            setJudul(e.target.value);
            setError("");
          }}
          aria-invalid={error ? "true" : "false"}
        />
        <button type="submit">Tambah</button>
      </form>
      <p className="pesan" role="alert">{error}</p>

      <p>
        Selesai: {jumlahSelesai} dari {tugas.length} tugas
      </p>

      <div className="row" role="group" aria-label="Filter tugas">
        {DAFTAR_FILTER.map((f) => (
          <button
            key={f}
            className={filter === f ? "aktif" : ""}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="tugas">
        {tampil.map((t) => (
          <ItemTugas key={t.id} tugas={t} onToggle={toggle} onHapus={hapus} />
        ))}
        {tampil.length === 0 && <li>Tidak ada tugas untuk ditampilkan.</li>}
      </ul>
    </main>
  );
}