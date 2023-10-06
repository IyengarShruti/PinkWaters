import logo2 from '../images/logo2.png';
const Nav =({authToken}) => {
    return (
        <nav>
            <div className = "applogo-container">
                <img className= "applogo" src={logo2}/>
            </div>
            {!authToken && <button className="nav-button">Log in</button>}
        </nav>
    )
       
}

export default Nav