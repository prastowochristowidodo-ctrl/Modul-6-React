import "./App.css";

function KartuKuliah({ nama, kode, sks }) {
  return (
    <div className="card">
      <h3>{nama}</h3>
      <p>Kode: {kode}</p>
      <p>SKS: {sks}</p>
    </div>
  );
}

function App() {
  const mataKuliah = [
    { id: 1, nama: "Pemrograman BerbasisWeb", kode: "IF101", sks: 3 },
    { id: 2, nama: "Metode Numerik", kode: "IF102", sks: 3 },
    { id: 3, nama: "Aljabar Linear", kode: "IF103", sks: 3 },
    { id: 4, nama: "Manajemen Data", kode: "IF104", sks: 4 },
  ];

  return (
    <div className="container">
      <h2>Daftar Mata Kuliah</h2>

      <div className="daftar">
        {mataKuliah.map((mk) => (
          <KartuKuliah
            key={mk.id}
            nama={mk.nama}
            kode={mk.kode}
            sks={mk.sks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;