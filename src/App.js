import './App.css';
import Title from './Title.jsx';
import Cloud from './Cloud.jsx';
import { PostList } from './PostList.jsx';
import { MakePost } from './MakePost.jsx';


function App() {
  
  return (
    <div className="App">
    <div className="centerer">

      <Title />

      <div className="info">
        <p className="white"> ====================================================================================== </p>
        <p className="bold"> Oscar's Retro Social </p>
        <p className="orange"> Brought to you by CloudFlare </p>
        <p className="white"> ======================| Your System Operator is: <span className="cyan">Oscar Saharoy</span> |====================== </p>
        <p className="yellow"> Served from 100s of Data Centres Worldwide </p>
        <p className="magenta"> Low Latency & High Reliability Guaranteed </p>
        <p className="white"> ====================================================================================== </p>
      </div>

      <div className="posts">

        <MakePost />

        <p className="bold magenta"> Posts from Other Users: </p>

        <PostList />
        
      </div>

      <p className="white seperator"> ====================================================================================== </p>

      <Cloud />

      <p className="thankyou"> Thank You for Visiting! </p>

    </div>
    </div>
  );
}

export default App;
