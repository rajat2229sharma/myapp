import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  const [value, setValue] = useState("");
  const [results, setResults] = useState();

  console.log(props);

  const fetchImages = () => {
    // 4uJxvhsK9quqsVsA6Y_i4QnHSbsVz1S_jpf0pJl0apE
    fetch(`https://api.unsplash.com/search/photos?client_id=4uJxvhsK9quqsVsA6Y_i4QnHSbsVz1S_jpf0pJl0apE&query=${value}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setResults(data.results);
    })
  }
  return (
    <div className="App">
      <div className="my-app">
        <span>search</span>
        <input
          type="text"
          value={value}
          onChange={(e)=>setValue(e.target.value)} />
        <button onClick={()=>fetchImages()}>Send</button>
        <br></br>
        <button onClick={() =>{props.changeName("suresh")}}>Change Name</button>
      </div>
      <div className="my-app">
        {
          results?.map((item)=> {
            return <img key={item.id} alt="" src={item.urls.regular} />
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) =>{dispatch({type: 'CHANGE_NAME', payload:name})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
