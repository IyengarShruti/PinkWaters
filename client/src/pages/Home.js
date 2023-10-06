import Nav from "../components/Nav";
import logo2 from '../images/logo2.png';

const Home = () => {
  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="overlay">
        <div class="topnav">
            <div class="logo">
                <img src={logo2} alt="App Logo" height="58"></img>
            </div>
            <div>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#info">Info</a>
            </div>
          
        </div>
      <div className="home">
      
        <h1>PinkWaters</h1>
        
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default Home;
