import React from "react"


const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>

            <div>
                <img src={imgUrl} alt="logo_api" className="navbar-img"/>
            </div>

            <div>
                ❤
            </div>
        </nav>
    )
}

export default Navbar;