import './App.css';
import SearchResults from './components/searchResults';
import {useState} from 'react';

function App() {
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = () => {
    setShowSearchResults(!showSearchResults);
    console.log(showSearchResults)
  }

  return (
    <div className="body">
    <div className="header">
      <div className="header__top">
        <div className="u-container header__row">
          <ul className='header__sites'>
            <li><a className='header__sites-links' href="#">Promethean</a></li>
            <li><a className='header__sites-links' href="#">Support</a></li>
            <li><a className='header__sites-links' href="#">Learn</a></li>
          </ul>
          <ul className='header__sites'>
            <li><a className='header__sites-links' href="#">Request a Demo</a></li>
            <li><a className='header__sites-links' href="#">Buy Promethean</a></li>
          </ul>
        </div>
      </div>
      <div className=" u-container header__main-top">
        <div className="header__main">
          <div className="header__logo">
            <img className="header__logo" src="https://www.prometheanworld.com/wp-content/themes/bootscore-5-child/img/logo/logo-dark.svg" />
          </div>
          <ul className='header__sites header__main-nav'>
            <li><a className='header__sites-links' href="#">Solutions</a></li>
            <li><a className='header__sites-links' href="#">Products</a></li>
            <li><a className='header__sites-links' href="#">Software</a></li>            
            <li><a className='header__sites-links' href="#">Accessories</a></li>            
            <li><a className='header__sites-links' href="#">Resources</a></li>
          </ul>
          <div className='header__search-container'>
            <a className='hero__link' href="#" onClick={handleSearch}>
              <img className="header__search-icon" src="https://img.icons8.com/ios-filled/512/search--v4.png" />
            </a>
          </div>
        </div>
        
          {showSearchResults ? <SearchResults handleSearch={handleSearch}/> : null}

      </div> 
    </div>
    <div className='hero'>
      <div className="u-container">
          <img className='hero__image' src="https://www.prometheanworld.com/wp-content/uploads/2022/05/AP9-hero_Homepage_0522v2.6.png" />
      </div>
    </div>
    </div>
  );
}

export default App;
