import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import Title from './components/Title';
import AllFilms from "./components/AllFilms";



function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Title />
        <AllFilms />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
