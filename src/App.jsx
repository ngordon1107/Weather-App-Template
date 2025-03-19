import { useState, useEffect } from "react";
import "./App.css";
import { getWeather } from "./services/WeatherService";
import { getDateFromHours } from "./utils/getDateFromHours";
import { defaultCountryCode, getUSState } from "./utils/getUSState";



function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  // const [searchType, setSearchType] = useState(() => {
  //   if (Object.keys(getUSStates).includes(location.toLowerCase()) || Object.values(getUSStates).includes(location.toLowerCase())) {
  //     return 'state'
  //   }
  //   elseif () {
  //     return 'city'
  //   }
  // })

  const defaultLocation = {
    city: "Jersey City",
    state: "New Jersey",
    countrycode: "840",
    zipcode: "",
    landmark: "",
  };

  const [location, setLocation] = useState(defaultLocation);

  const [searchType, setSearchType] = useState("city");
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   getWeather({
  //     city: location.city,
  //     statecode: location.statecode,
  //     countrycode: location.countrycode,
  //     zipcode: location.zipcode,
  //     //gonna need to change this to latitude and longitude
  //     lat: location.landmark,
  //     lon: location.landmark,
  //   })
  //     .then((data) => {
  //       setWeather(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }, [location]);

  //Handles input box value change --typing in search bar. Clears out all previous values
  const handleChange = (input) => {
    const { value } = input.target;

    // if (searchType === "state") {
    //   const stateObject = getUSState(value);
    //   setLocation({
    //     city: "",
    //     state: stateObject.statename,
    //     statecode: stateObject.statecode,
    //     countrycode: defaultCountryCode,
    //     zipcode: null,
    //     landmark: "",
    //   });
    // } else {
    //   setLocation((prev) => ({ ...prev, [searchType]: value }));
    // }
    setLocation((prev) => ({ ...prev, [searchType]: value }));
  };

  const changeSearchType = (e) => {
    setSearchType(e.target.value);
    //setLocation(defaultLocation);
  };

  //Form submission handling.
  const handleSubmit = (e) => {
    //prevents reloading the page on submit
    e.preventDefault();

    if (!location.city) {
      alert("You must enter a city to continue");
    }

    setLoading(true);
    getWeather(location)
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // getWeather({
    //   city: location.city,
    //   statecode: location.statecode,
    //   countrycode: location.countrycode,
    //   zipcode: location.zipcode,
    //   //gonna need to change this to latitude and longitude
    //   lat: location.landmark,
    //   lon: location.landmark,
    // })
    //   .then((data) => {
    //     setWeather(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   });

    //selects specific search-Type.type elements
    // const value = e.target.elements[`search-${searchType.type}`].value;
    //says: when form is submitted clear out all location fields and add in the new location
    // setLocation((prev) => [{ ...prev, [searchType.type]: value }]);
  };
  // console.log("Location object:", location);
  // console.log("Search type:", searchType);
  // console.log("Value:", location[searchType.type]);
  return (
    <main>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Weather Loading</p>
      ) : (
        <section>
          <form onSubmit={handleSubmit}>
            <label htmlFor="search-bar">
              <input
                type="text"
                name="searchbar"
                id="search-bar"
                placeholder={`Search by ${searchType}`}
                value={location[searchType]}
                onChange={handleChange}
              />
              <button type="submit">
                Search
              </button>
            </label>
          </form>
          <div id="search-type">
          <p>Narrow your search by... </p>
            {/* <button type="button" name="city" onClick={changeSearchType}>
              City
            </button>
            <span className="separator"> | </span> */}
            <select value={searchType} onChange={changeSearchType}>
              <option value="city">city</option>
              <option value="state">state</option>
              <option value="zipcode">zip code</option>
              <option name="landmark" value="landmark">landmark</option>
            </select>
            {/* <button type="button" name="state" onClick={changeSearchType}>
              State
            </button>
            <span className="separator"> | </span>
            <button type="button" name="zipcode" onClick={changeSearchType}>
              Zip Code
            </button>
            <span className="separator"> | </span>
            <button type="button" name="landmark" onClick={changeSearchType}>
              Landmark
            </button> */}
          </div>
            <h1>Weather Details For: {location[searchType]}</h1>
            <div id='weather-details-box'>
              <div id='weather-text'>
              <p>
                {weather?.main?.temp} C° | {weather?.weather[0]?.description}
              </p>
              <p>Sunset: {getDateFromHours(weather?.sys.sunset)}</p>
              <p>Humidity: {weather?.main.humidity}</p>
              <p>Sea Level: {weather?.main.sea_level}</p>
              <p>Wind Speed: {weather?.wind.speed}</p>
              </div>
            </div>
        </section>
      )}
    </main>
  );
}

export default App;
