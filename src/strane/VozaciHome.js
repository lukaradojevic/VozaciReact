import NavBar from "../komponente/NavBar";
import {useState} from 'react'

function VozaciHome(){

    const [godina, setGodina] = useState('');

    function postaviGodinu(e){
        setGodina(e.target.value);
    }

    return (
        <div>

            <NavBar />  

            <h2 id="nas-takm-godine">Unesite takmičarsku godinu</h2>  
            <input type="text" className="form-control" id="unos-takm-godine" onChange={postaviGodinu} value={godina} />  
            <button type="button" className="btn btn-info btn-lg" id="btnprikazi">Prikaži</button>

        </div>
    )
}

export default VozaciHome;