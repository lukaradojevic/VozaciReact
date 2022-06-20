function InfoVozaci(props){

    return (
        <div>
            <table className="table table-bordered" id="infoVozaciTabela">
                    <thead>
                        <tr>
                            <th>Ime i prezime</th>
                            <th>Država</th>
                            <th>Poeni</th>
                            <th>Pozicija</th>
                            <th>Sezona</th>
                            <th>Tim</th>
                        </tr>
                    </thead>

                    <tbody>
                    {props.info.map(vozac => {
                            return (
                                <tr key={vozac.driver_id}>
                                    <td>{vozac.driver_name}</td>
                                    <td>{vozac.nationality}</td>
                                    <td>{vozac.points}</td>
                                    <td>{vozac.position}</td>
                                    <td>{vozac.season}</td>
                                    <td>{vozac.team_name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
            </table>
        </div>
    )
}

export default InfoVozaci;