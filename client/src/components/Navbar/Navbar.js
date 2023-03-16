import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({phoneList}) {
  console.log (phoneList) 
  return (
    <nav>
  <Link to="/" className="active">
  <button>Home</button>
  </Link>

  {phoneList.map((phone) => {
    return <Link to={`/phoneDetails/${phone.id}`} key={phone.id} activeClassName="active">
    {phone.name}
  </Link>      
  })}

    </nav>
  );
}

export default Navbar;