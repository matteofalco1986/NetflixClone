import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import Title from './components/Title';
import AllFilms from "./components/AllFilms";
import SearchBar from './components/SearchBar';


function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <SearchBar />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
