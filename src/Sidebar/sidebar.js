import "./sidebar.css";
import LogoSpotify from "../../src/assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faGlobe,
  faBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar_navigation">
        <div className="logo">
          <a href="">
            <img src={LogoSpotify} alt="Logo do Spotify" />
          </a>
        </div>

        <ul>
          <li>
            <a href="">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library__content">
          <button className="library__buttom">
            <span>
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>Sua biblioteca</span>
          </button>
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira Playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section-playlist__buttom">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <div className="cookies">
          <a href="">Cookies</a>
        </div>

        <div className="lenguages">
          <button className="lenguages__button">
            <span>
              <FontAwesomeIcon icon={faGlobe} />
            </span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
