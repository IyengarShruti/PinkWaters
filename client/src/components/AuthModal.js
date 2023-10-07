const AuthModal =({setShowModal}) => {

    const handleClick =() =>{
        setShowModal(false)
    }
    return (
        <div className="auth-modal">
            <div onClick={handleClick}>Clicking</div>
            AUTH MODAL
        </div>
    )    
    
    
}


export default AuthModal