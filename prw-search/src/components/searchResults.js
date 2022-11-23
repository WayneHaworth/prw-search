import {useState} from "react";

const SearchResults = ({handleSearch, ref}) => {

    const products = [
        { "title": "How ActivPanel interactive whiteboards for classrooms integrates into any technology environment", "category": "prw" },
        { "title": "How can I see a demonstration of the Promethean ActivPanel interactive display?", "category": "prw" },
        { "title": "My school operates within the Microsoft ecosystem. Will that work with the Promethean ActivPanel?", "category": "prw" },
        { "title": "7 reasons youll love the all-new ActivPanel?", "category": "prw" },
        { "title": "Whats behind the all-new ActivPanel?", "category": "prw" },
        { "title": "Promethean announces the all-new ActivPanel with ActivSync, delivering a transformational and intuitive user experience", "category": "prw" },
        { "title": "ActivPanel 9 product page", "category": "prw" },
        { "title": "Promethean ActivPanel named “Student Engagement Solution of the Year” by EdTech Breakthrough Awards", "category": "prw" },    
        { "title": "How ActivPanel interactive whiteboards for classrooms integrates into any technology environment", "category": "prw" },
        { "title": "Promethean ActivPanel named 2022 SIIA CODiE Award finalist in Best Emerging Instructional Technology Solution category", "category": "prw" },
        { "title": "Zoo Miami saves endangered species with the help of ActivPanel", "category": "prw" },
        { "title": "Promethean ActivPanel remains global market leader for interactive displays in USA and EMEA", "category": "prw" },
        { "title": "Presentations on the latest Promethean ActivPanel, on Display, at TCEA 2022", "category": "prw" },
        { "title": "Promethean ActivPanel named a winner of Tech & Learning Awards of Excellence: Best of 2021", "category": "prw" },
        { "title": "ActivPanel Titanium PPC", "category": "prw" },
        { "title": "ActivPanel Benefits", "category": "prw" },
        { "title": "Experience the ActivPanel", "category": "prw" },
        { "title": "Promethean ActivPanel® maintains tenure as market leader for interactive displays in the USA", "category": "prw" },
        { "title": "ActivPanel Stands", "category": "prw" },
        { "title": "ActivPanel for the Workplace", "category": "prw" },
        { "title": "ActivPanel firmware upgrade instructions", "category": "support" },
        { "title": "ActivPanel Titanium/Titanium Pro Firmware Upgrade Instructions", "category": "support" },
        { "title": "Which version of ActivPanel am I using?", "category": "support" },
        { "title": "How do I factory reset the ActivPanel 9 or the ActivPanel Elements series?", "category": "support" },
        { "title": "ActivPanel Nickel Firmware Upgrade Instructions", "category": "support" },
        { "title": "ActivPanel displays 'No Signal' message", "category": "support" },
        { "title": "How do I calibrate the ActivPanel?", "category": "support" },
        { "title": "ActivPanel Stand Compatibility Matrix", "category": "support" },
        { "title": "Gesture support for ActivPanel Elements Series and ActivPanel Titanium Pro", "category": "support" },    
        { "title": "ActivPanel Cobalt Firmware Upgrade Instructions", "category": "support" },
        { "title": "Radix VISO enablement and licensing for the ActivPanel", "category": "support" },
        { "title": "Touch panning issues with ActivPanell", "category": "support" },
        { "title": "Create spinner lists by uploading .csv files", "category": "learn" },
        { "title": "Saving your Whiteboard", "category": "learn" },
        { "title": "Make a slideshow on your ActivPanel", "category": "support" },
        { "title": "Access Google apps in Chromium", "category": "learn" },
        { "title": "Trick or Treat: ClassFlow Halloween Activities for School", "category": "learn" },
        { "title": "Make an interactive Whiteboard activity", "category": "learn" },
        { "title": "ActivSync quick start guide", "category": "learn" },
        { "title": "The ActivPanel remote", "category": "learn" },
        { "title": "Using gestures to interact with ActivInspire on your ActivPanel", "category": "learn" },    
        { "title": "Chromium shortcuts on your ActivPanel 9", "category": "learn" },
        { "title": "Quick start guide for the ActivPanel 9", "category": "learn" },
        { "title": "Set the classroom mood with your ActivPanel", "category": "learn" }
    ];


    const [searchText, setSearchText] = useState('')
    const handleSearchText = (event) => { setSearchText(event.target.value) }
  
    const filteredSearchResults_PRW = products
      .filter( p => p.title.toLowerCase()
      .includes(searchText.toLowerCase()))
      .filter( p => p.category === "prw")
  
    const filteredSearchResults_support = products
      .filter( p => p.title.toLowerCase()
      .includes(searchText.toLowerCase()))
      .filter( p => p.category === "support")
  
    const filteredSearchResults_learn = products
      .filter( p => p.title.toLowerCase()
      .includes(searchText.toLowerCase()))
      .filter( p => p.category === "learn")

    return (
      <div className="searchResultsContainer">
    <div className='searchResults'>
      <input autoFocus placeholder="Search Promethean" type="text" value={searchText} onChange={handleSearchText} />
      <div className='searchResults__prw'>
        {searchText.length && filteredSearchResults_PRW.length > 0 ? <h3>Promethean World</h3> : null }
        {searchText && filteredSearchResults_PRW.slice(0,3).map((product, index) => (
          <div key={index}>{product.title}</div>
        ))}

        {searchText.length && filteredSearchResults_support.length > 0 ? <h3>Support</h3> : null }
        {searchText && filteredSearchResults_support.slice(0,3).map((product, index) => (
          <div key={index}>{product.title}</div>
        ))}
        {searchText.length && filteredSearchResults_learn.length > 0 ? <h3>Learn</h3> : null }
        {searchText && filteredSearchResults_learn.slice(0,3).map((product, index) => (
          <div key={index}>{product.title}</div>
        ))}
      </div>
      <div>
        <a className='hero__link' href="#" onClick={handleSearch}>
          <img className="header__search-icon" src="https://img.icons8.com/ios-filled/512/delete-sign--v2.png" />
        </a>
      </div>
    </div>
    </div>
    )
}

export default SearchResults
