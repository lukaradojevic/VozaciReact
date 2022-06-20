import FormaRezervacija from "../komponente/FormaRezervacija";

function Rezervacija(){

    function submit(e, rezervacija){
        e.preventDefault();

        alert("Rezervacija je uspešno kreirana! Ime i prezime: " + rezervacija.imePrezime + " Trka: " + rezervacija.trka + 
            " Datum: " + rezervacija.datum + " Broj karata: " + rezervacija.brojKarata + " Pozicija: " + rezervacija.pozicija + 
            " Email: " + rezervacija.email
        )
    }


    return (
        <div>
            <FormaRezervacija submit={submit} />
        </div>
    )
}

export default Rezervacija;