import {Link} from 'react-router-dom'

function NavBar(){
    return (
        <div>
            <nav>
                <Link to={"/"}>F1 VOZAČI</Link>
                <Link to={"/rezervacija"}>REZERVACIJA</Link>
            </nav>
        </div>
    )
}

export default NavBar;