import useFetch from "../../hooks/userFetch";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {

  const {data, loading , error} = useFetch("http://localhost:8800/api/hotels?featured=true")
  return (
    <div className="fp">
      {/* <h1>this featured properties</h1> */}
      {loading ? "Loading" : <>
      {data.map(item => (
        <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
      ))}
      </> }
      

    </div>
  );
};

export default FeaturedProperties;