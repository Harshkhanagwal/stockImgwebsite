import React, { useState } from 'react'
import './style/header.css'
import Logo from './components/logo'
import './style/gallery.css'
import Footer from './components/footer'
//Dwq3y3lxCey9mPaUvl7lsG1PFTQc1ZvV55-3ksqKTyI

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const App = () => {
    const [value, setValue] = useState();
    const [result, setResult] = useState();


    let url = `https://api.unsplash.com/search/photos?client_id=Dwq3y3lxCey9mPaUvl7lsG1PFTQc1ZvV55-3ksqKTyI&query=${value}&orientation=squarish&per_page=30`
    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setResult(data.results))

    }

    return (


        <>
            <div className="main">
                <header className="container search-bar-area">
                    <div className="logo-area">
                        <Logo />
                    </div>
                    <div className="search-area">
                        <div className="searchBar-area">
                            <input type="text" placeholder='Search for anything...' required className='inputfld'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <button className='searchBT' onClick={() => fetchData()}>Search</button>
                        </div>
                    </div>
                </header>

                <div className="container gallery-area ">

                    <div className="imgArea">
                        {
                            result ? result.map((img) => (
                                <>

                                    <img src={img.urls.small} alt="img" className="imgCard" />
                                </>
                            )) : ""

                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default App