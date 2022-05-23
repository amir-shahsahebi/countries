const RenderedItems = ({ countries }) => {
  //   console.log(countries);
  const cards = countries
    ?.filter((country) => country.population)
    .map((country) => {
      return (
        <div className="card" key={country.name.common}>
          <img
            className="first-image"
            src={country.flags.svg}
            alt="country.name.common"
          />
          <div className="card-text">
            <h3 className="country-name">{country.name.common}</h3>
            <p>
              Population:{" "}
              <span className="light-text">{country.population}</span>
            </p>
            <p>
              Region: <span className="light-text">{country.region}</span>
            </p>
            <p>
              Capital: <span className="light-text">{country.capital}</span>
            </p>
          </div>
          <img
            className="second-image"
            src={country.coatOfArms.svg}
            alt="coatOfArms"
          />
        </div>
      );
    });
  return <div className="card-container">{cards}</div>;
};

export default RenderedItems;
