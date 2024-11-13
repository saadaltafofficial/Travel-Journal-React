import { FaLocationDot } from "react-icons/fa6";


const Visits = (item) => { 
 
  return (
    <div className="card">
      <img src={item.imageUrl} alt="image" />
      <div className="details">
        <div className="location">
          <p className="country"><FaLocationDot className="location-icon" />{item.location}</p>
          <a href={item.googleMapsUrl}>view on Google Maps</a>
        </div>
        <h1>{item.title}</h1>
        <p id="dates">{item.startDate} - {item.endDate}</p>
        <p>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default Visits;
