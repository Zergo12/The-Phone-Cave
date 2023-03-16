import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar({phoneList}) {
  console.log (phoneList) 
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

    {phoneList.map((phone) => {
      return  <Link to={`/phoneDetails/${phone.id}`} key={phone.id}>
      {phone.name}
      </Link>      
    })}

    </nav>
  );
}

export default Navbar;