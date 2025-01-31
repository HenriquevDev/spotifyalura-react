import './App.css';
import './api-artists/artists.json'
import Header from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Main from './Main/main';
import Footer from './Footer/footer';
import Busca from './script';

function App() {
  return (
    <div>
    <Sidebar/>
    <Header/>
    <Main/>
    <Footer/>
    <Busca/>
    </div>
  );
}

export default App;
