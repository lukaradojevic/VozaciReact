import NavBar from "../komponente/NavBar";
import {useState} from 'react'
import InfoVozaci from "../komponente/InfoVozaci";

function VozaciHome(){

    const [godina, setGodina] = useState('');
    const [info, setInfo] = useState([]);

    function postaviGodinu(e){
        setGodina(e.target.value);
    }

    function getInfo(){

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4916172c11msh0beee19c8846ca4p127267jsn0bc7bcd7fc43',
                'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
            }
        };
        
        fetch('https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/'+ godina, options)
            .then(response => response.json())
            .then(response => setInfo(response.results))
            .catch(err => console.error(err));

    }


    return (
        <div>

            <NavBar />  

            <h2 id="nas-takm-godine">Unesite takmičarsku godinu</h2>  
            <input type="text" className="form-control" id="unos-takm-godine" onChange={postaviGodinu} value={godina} />  
            <button type="button" onClick={getInfo} className="btn btn-info btn-lg" id="btnprikazi">Prikaži</button>

            <InfoVozaci info={info}/>

        </div>
    )
}

export default VozaciHome;