import Nav from "../components/Nav";
import {useState} from 'react';
import AuthModal from "../components/AuthModal";
import care from '../images/care.png';


const Home = () => {
  const [showModal,setShowModal] = useState(false)
  const authToken = false

  const handleClick = () => {
    console.log("clicked")
    setShowModal(true)
  };

  return (
    <div className="overlay">
      <header className="myheader">
      <h2 className="title-container">
            <img src={care} alt="Icon" className="icon" />
            <span className="text-dark-blue">Pink</span>
            <span className="text-pink">Waters</span>
            <span className="text-slogan"><i>-You are heard</i></span>

        </h2>
      </header>
        <Nav authToken ={authToken}/>
      <div className="home">
      
        <h1>PinkWaters</h1>
        
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
        { showModal && <AuthModal setShowModal={setShowModal}/> }
      </div>
    </div>
  )
};

export default Home;
