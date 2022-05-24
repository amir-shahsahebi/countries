import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { getCountry } from "../apis/getCountries";

const SingleItem = ({ AllCountries }) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [country, setCountry] = useState(null);
  let param = useParams();
  useEffect(() => {
    setCountry(
      AllCountries.filter(
        (country) => country.name.common.toLowerCase() === param.countryName
      )[0]
    );
    // getCountry(location.state.toLowerCase()).then((res) =>
    //   setCountry(res.data[0])
    // );
  }, [AllCountries, param.countryName]);

  console.log(country);
  const borderCountries = [];
  country &&
    country.borders?.forEach((element) =>
      borderCountries.push(
        AllCountries.filter((country) => country.cca3 === element)[0].name
          .common
      )
    );

  // console.log(borderCountries);

  // console.log(location.state, country);
  const details = country ? (
    <div>
      <div className="country-container">
        <img
          className="single-image"
          src={country.flags.svg}
          alt={country.name.common}
        />
        <div className="single-page-texts">
          <h2>{country.name.common}</h2>
          <div className="middle-texts">
            <div className="right-left">
              <p>
                Native Name:{" "}
                <span className="light-text">
                  {Object.values(country.name.nativeName)[0].common}
                </span>
              </p>
              <p>
                Populations:{" "}
                <span className="light-text">{country.population}</span>
              </p>
              <p>
                Region: <span className="light-text">{country.region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="light-text">{country.subregion}</span>
              </p>
              <p>
                Capital: <span className="light-text">{country.capital}</span>
              </p>
            </div>
            <div className="right-right">
              <p>
                Top Level Domain:{" "}
                <span className="light-text">{country.tld[0]}</span>
              </p>
              <p>
                Currencies:{" "}
                <span className="light-text">
                  {Object.values(country.currencies)[0].name}
                </span>
              </p>
              <p>
                languages:{" "}
                <span className="light-text">
                  {Object.values(country.languages)[0]}
                </span>
              </p>
            </div>
          </div>
          <div className="bottom-text">
            <div className="bottom-left">Border Countries:</div>
            <div className="bottom-right">
              {borderCountries &&
                borderCountries.map((countryName) => {
                  return (
                    <Link
                      key={countryName}
                      state={countryName.toLowerCase()}
                      to={`/${countryName.toLowerCase()}`}
                      className="link"
                    >
                      <span className="countryName">{countryName}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
  // console.log(country);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      {details}
    </div>
  );
};

export default SingleItem;
