import logoWithWhite from '../images/logoWithWhite.png'

const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () =>{
        setShowModal(true)
        setIsSignUp(false)
    }
    return (
        <nav>
            <div className="navbar-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <button className="nav-button">Home</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-button">About</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-button">Contact</button>
                    </li>
                    <li className="nav-item">
                        {!authToken && <button className="nav-button"
                        onClick={handleClick}
                        disabled = {showModal}
                        >Log in</button>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
