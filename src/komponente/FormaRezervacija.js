import {useState} from 'react'
import NavBar from './NavBar';

function FormaRezervacija(props){

    const [rezervacija, setRezervacija] = useState({
        imePrezime: '',
        trka: '',
        datum: '',
        brojKarata: '',
        pozicija: '',
        email: ''
    });    

    function postaviImePrezime(e){
        setRezervacija({...rezervacija, imePrezime: e.target.value});
    }

    function postaviTrku(e){
        setRezervacija({...rezervacija, trka: e.target.value});
    }

    function postaviDatum(e){
        setRezervacija({...rezervacija, datum: e.target.value});
    }

    function postaviBrojKarata(e){
        setRezervacija({...rezervacija, brojKarata: e.target.value});
    }

    function postaviPoziciju(e){
        setRezervacija({...rezervacija, pozicija: e.target.value});
    }

    function postaviEmail(e){
        setRezervacija({...rezervacija, email: e.target.value});
    }



    return (
        <div>

            <NavBar />

          <form id="formarezervacija">

                    <label>Ime i prezime </label>
                    <input type="text" className="form-control" onChange={postaviImePrezime} value={rezervacija.imePrezime}/>

                    <label>Trka </label>
                    <input type="text" className="form-control" onChange={postaviTrku} value={rezervacija.trka}/>

                    <label>Datum </label>
                    <input type="text" className="form-control" onChange={postaviDatum} value={rezervacija.datum}/>

                    <label>Broj karata </label>
                    <input type="number" className="form-control" onChange={postaviBrojKarata} value={rezervacija.brojKarata}/>

                    <label>Pozicija </label>
                    <input type="text" className="form-control" onChange={postaviPoziciju} value={rezervacija.pozicija}/>

                    <label>Email</label>
                    <input type="text" className="form-control" onChange={postaviEmail} value={rezervacija.email}/>

                    <button type="submit" onClick={(e) => props.submit(e, rezervacija)} className="btn btn-info" id="btnrezervisi">Rezerviši</button>


            </form>

        </div>
    )
}

export default FormaRezervacija;