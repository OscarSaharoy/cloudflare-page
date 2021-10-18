import './App.css';

function App() {

  document.title = "Oscar's Retro Social";
  
  return (
    <div className="App">
    <div className="centerer">

      <div className="title-container">

        <p className="title">
  <span className="hidden">.</span>________  ________  ________  ________  ________  ________        <br></br>
                                  |\   __  \|\   ____\|\   ____\|\   __  \|\   __  \|\   ____\       <br></br>
                                  \ \  \|\  \ \  \___|\ \  \___|\ \  \|\  \ \  \|\  \ \  \___|_      <br></br>
  <span className="hidden">.</span>\ \  \\\  \ \_____  \ \  \    \ \   __  \ \   _  _\ \_____  \     <br></br>
  <span className="hidden">.</span> \ \  \\\  \|____|\  \ \  \____\ \  \ \  \ \  \\  \\|____|\  \    <br></br>
  <span className="hidden">.</span>  \ \_______\____\_\  \ \_______\ \__\ \__\ \__\\ _\ ____\_\  \   <br></br>
  <span className="hidden">.</span>   \|_______|\_________\|_______|\|__|\|__|\|__|\|__|\_________\  <br></br>
  <span className="hidden">.</span>            \|_________|                            \|_________|
        
        </p>

        <p className="title">
  <span className="hidden">.</span>________  _______  _________  ________  ________      <br></br>
                                  |\   __  \|\  ___ \|\___   ___\\   __  \|\   __  \     <br></br>
                                  \ \  \|\  \ \   __/\|___ \  \_\ \  \|\  \ \  \|\  \    <br></br>
  <span className="hidden">.</span>\ \   _  _\ \  \_|/__  \ \  \ \ \   _  _\ \  \\\  \   <br></br>
  <span className="hidden">.</span> \ \  \\  \\ \  \_|\ \  \ \  \ \ \  \\  \\ \  \\\  \  <br></br>
  <span className="hidden">.</span>  \ \__\\ _\\ \_______\  \ \__\ \ \__\\ _\\ \_______\ <br></br>
  <span className="hidden">.</span>   \|__|\|__|\|_______|   \|__|  \|__|\|__|\|_______| <br></br>
  <span className="hidden">.</span>
        </p>

        <p className="title">
  <span className="hidden">.</span>________  ________  ________  ___  ________  ___           <br></br>         
                                  |\   ____\|\   __  \|\   ____\|\  \|\   __  \|\  \          <br></br>        
                                  \ \  \___|\ \  \|\  \ \  \___|\ \  \ \  \|\  \ \  \         <br></br>       
  <span className="hidden">.</span>\ \_____  \ \  \\\  \ \  \    \ \  \ \   __  \ \  \        <br></br>      
  <span className="hidden">.</span> \|____|\  \ \  \\\  \ \  \____\ \  \ \  \ \  \ \  \____   <br></br> 
  <span className="hidden">.</span>   ____\_\  \ \_______\ \_______\ \__\ \__\ \__\ \_______\ <br></br>
  <span className="hidden">.</span>  |\_________\|_______|\|_______|\|__|\|__|\|__|\|_______| <br></br>
  <span className="hidden">.</span>  \|_________|                                                   

        </p>

      </div>

      <div className="info">
        <p className="white"> ====================================================================================== </p>
        <p> Brought to you by CloudFlare </p>
        <p className="magenta"> Fibre-Optic IP-Link @ 100 Gbit/sec </p>
        <p className="white"> ======================| Your System Operator is: <span className="cyan">Oscar Saharoy</span> |====================== </p>
        <p className="yellow"> Served from 100s of Data Centres Worldwide </p>
        <p className="orange"> Dialup Time: 00:00 - 23:59 </p>
        <p className="red"> www: </p>
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

        <div className="post">
          <p> User: Oscar </p>
          <p> asdkbalkdjas ll adhas kajshd ask hdakdh ask </p>
        </div>

        <div className="post">
          <p> User: Oscar </p>
          <p> asdkbalkdjas ll adhas kajshd ask hdakdh ask </p>
        </div>

        <div className="post">
          <p> User: Oscar </p>
          <p> asdkbalkdjas ll adhas kajshd ask hdakdh ask </p>
        </div>

        <div className="post">
          <p> User: Oscar </p>
          <p> asdkbalkdjas ll adhas kajshd ask hdakdh ask </p>
        </div>

        <div className="post">
          <p> User: Oscar </p>
          <p> asdkbalkdjas ll adhas kajshd ask hdakdh ask </p>
        </div>

        <div className="post">
          <p> User: Oscar </p>
          <p> asdkbalkdjas ll adhas kajshd ask hdakdh ask </p>
        </div>
        
      </div>


      <p className="orange cloud">

<span className="hidden">.</span>                    __-=;.__                  <br></br>      
<span className="hidden">.</span>                  oG********/\,               <br></br>  
<span className="hidden">.</span>           __==__//******Kl****/\.            <br></br>   
<span className="hidden">.</span>         .@@#******####*********/  <span className="lightorange">._=-__    </span> <br></br>   
<span className="hidden">.</span>      _=/***%**%$******&&&*****/  <span className="lightorange">/**O8**\   </span> <br></br>     
<span className="hidden">.</span>    */****FF@;***//L(///[/##P'   <span className="lightorange"> \@##****#\ </span> <br></br>    
<span className="hidden">.</span>   /*****--==_______________     <span className="lightorange"> ____==-**/ </span> <br></br>   
<span className="hidden">.</span>   *Q__@#/@#idobackendtoodw/@\  <span className="lightorange">/@[***86LO'  </span>

     </p>
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
