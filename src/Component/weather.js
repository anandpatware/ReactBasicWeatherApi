import { useEffect, useState } from "react";

function Weather() {
  const [city, setCity] = useState("indore");
  const [data, setData] = useState(null);
  useEffect(() => {
    const weather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82413c81ac5564d5f0d531dde4471661`;
      const dat = await fetch(url);
      const jsondata = await dat.json();
      console.log(jsondata);
      setData(jsondata);
    };
    weather();
  }, [city]);
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "150px",
        }}
      >
        <div
          className="card"
          style={{
            backgroundColor: "skyblue",
            width: "30%",
            height: "400px",
            margin: "auto",
            borderRadius: "2rem",
            boxShadow: "0 0 30px lightgray",
          }}
        >
          <div className="top">
            <input
              className="form-control form-control-lg"
              style={{ borderRadius: "2rem", textTransform: "capitalize" }}
              type="text"
              placeholder="city"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>

          <div
            className="bottom"
            style={{
              fontStyle: "italic",
              display: "flex",
              flexDirection: "column",
              marginTop: "5rem",
              textTransform: "capitalize",
            }}
          >
            <h1>{city}</h1>
            {data === null ? (
              <h1>No data</h1>
            ) : data.main && data.main.temp !== undefined ? (
              <>
                <h1>{(data.main.temp - 273).toFixed(2)}</h1>
                <p style={{ color: "gray" }}>
                  min-temp- {(data.main.temp_min - 273).toFixed(2)} | max-temp-
                  {(data.main.temp_max - 273).toFixed(2)};
                </p>
              </>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
