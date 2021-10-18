import './App.css';
import Title from './Title.jsx';
import Post from './Post.jsx';
import Cloud from './Cloud.jsx';


function App() {

  document.title = "Oscar's Retro Social";
  
  return (
    <div className="App">
    <div className="centerer">

      <Title />

      <div className="info">
        <p className="white"> ====================================================================================== </p>
        <p> Brought to you by CloudFlare </p>
        <p className="magenta"> Fibre-Optic IP-Link @ 100 Gbit/sec </p>
        <p className="white"> ======================| Your System Operator is: <span className="cyan">Oscar Saharoy</span> |====================== </p>
        <p className="yellow"> Served from 100s of Data Centres Worldwide </p>
        <p className="orange"> Dialup Time: 00:00 - 23:59 </p>
        <p className="white"> ====================================================================================== </p>
      </div>

      <div className="posts">

        <p className="bold"> Make a Post! </p>
        <p className="cyan"> Please Type Here: </p>
      
        <textarea spellcheck="false"> </textarea>
      
        <div className="submit-holder">
          <input type="text" placeholder="Your Name"/>
          <button type="button" onClick={postPost}> Post. </button>
        </div>

        <p className="bold"> Posts from Other Users: </p>

        <Post username="Oscar" text="testetetstartestet etstartestetetstartestetetstartestete tstartestetetstartest etetstartestetetstartestetets tartestetetstartestetetstartestet etstartestetetstartestetetstartestetetstar" />
        <Post username="Oscar" text="testetetstar" />
        <Post username="Oscar" text="testetetstar" />
        <Post username="Oscar" text="testetetstar" />
        <Post username="Oscar" text="testetetstar" />
        <Post username="Oscar" text="testetetstar" />
        
      </div>

      <p className="white seperator"> ====================================================================================== </p>

      <Cloud />

      <p className="thankyou"> Thank You for Visiting! </p>

    </div>
    </div>
  );
}


function getPosts() {


}


function postPost() {

    // const username = 
}


export default App;
