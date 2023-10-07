import logoWithWhite from '../images/logoWithWhite.png'
const Nav =({authToken}) => {
    return (
        <nav>
            {/* <div className = "applogo-container">
                <img className= "applogo" src={logoWithWhite}/>
                
            </div> */}
            {!authToken && <button className="nav-button">Log in</button>}
        </nav>
    )
       
}

export default Nav