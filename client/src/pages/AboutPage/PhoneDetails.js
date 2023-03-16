import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./PhoneDetails.css";

function PhoneDetails({phoneList}) {
  console.log (phoneList) 

  const [phoneDetails, setPhoneDetails] = useState(null);

  const {phoneId} = useParams();

  useEffect(() => {
    getPhoneDetails();
  }, [phoneId]);


  const getPhoneDetails = async () => {
    const details =  await phoneList.find(eachPhone => eachPhone.id === Number(phoneId))
    setPhoneDetails(details)
  }


  if(!phoneDetails) {
    return <div>Loading...</div>;
  }

  const {name, manufacturer, description, color, price, screen, processor, ram, imageFileName} = phoneDetails;

  return (
    <div className='itemDetails container'>
      <h1>{name}</h1>
      <img src={imageFileName} alt={name}/>
      <h2>{description}</h2>
      <p>{manufacturer}</p>
      <p className="price">{price}</p>
      <p className="specs">{processor} {ram}</p>
      <p className="specs">{screen}</p>
      <p className="specs">{color}</p>
    </div>
  );
}

export default PhoneDetails;
