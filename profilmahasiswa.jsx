import "./App.css";

const nama = "Chornelius Prastowo Christo Putra";
const nim = "255314098";
const prodi = "Informatika";

function Profil() {
  return (
    <div className="card">
      <h2>Profil Mahasiswa</h2>
      <p>Nama: {nama}</p>
      <p>NIM: {nim}</p>
      <p>Program Studi: {prodi}</p>
    </div>
  );
}

function Keterangan() {
  return <p>Mahasiswa Universitas Sanata Dharma</p>;
}

function App() {
  return (
    <div className="container">
      <Profil />
      <Keterangan />
    </div>
  );
}

export default App;