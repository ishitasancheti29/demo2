import profilePic from './assets/image picture.jpg'

function Card(){
    return(
        <div className = "card">
            <img className= "card-image" src = {profilePic} alt = "profile picture"></img> 
            <h2>Ishita</h2>  
            <p>I am engineer </p>
        </div>

    );
}
export default Card