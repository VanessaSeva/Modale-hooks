import React, {useState} from 'react'
import './App.css'
import Modale from './Composants/Modale'

function App() {

    const [toggleModale, setToggleModale] = useState(false)

    const closeModale = (e) => {
      console.log(e.target.className);
      if(e.target.className === "contenu")return;
      setToggleModale(false)

    }
    const stopPropa = (e) => {
      e.stopPropagation();
    }
    const openModale = () => {
      setToggleModale(true)
    }


    let theModale = '';

    if(toggleModale){
      theModale = <Modale closeFunc={closeModale} openFunc={openModale} stopPropa={stopPropa}/>
    } else {
      theModale = '';
    }

  return (
    <div className="App">
      <button onClick={openModale}>OPEN</button>
      {theModale}
    </div>
  );
}

export default App;
