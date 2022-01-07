import './App.css';
import Header from './components/Header/Header';
import SpotifyWrapped from './components/SpotifyWrapped/SpotifyWrapped';
import Download from './components/Download/Download';
import Footer from './components/Footer/Footer';

//jsx 
const App = () => {
  return (
    <div className="App">
      <Header />
      <SpotifyWrapped />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
