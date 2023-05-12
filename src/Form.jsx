import React, { useState } from "react";

function FormInput() {
  const ApiKey = "1d40b310f2msh4dfef49212e82dep15c42ajsn622644114a6c";
  const AppId = "da0f9c8d90bde7e619c3ec47766a42f4";

  const [temp, setTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");

  //onchange function
  function textInput(event) {
    setCity(event.target.value);
  }


  const getWeather = async (event) => {
    setError(false);
    setTemp(null);
    setMaxTemp(null);
    setMinTemp(null);

    const url = `https://openweather43.p.rapidapi.com/weather?q=${city}&appid=${AppId}&units=standard`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": ApiKey,
        "X-RapidAPI-Host": "openweather43.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      // if (!response.ok) {
      //   const error = await response.json();
      //   console.log(error);
      // }
      const result = await response.json();
      setTemp(result.main.temp);
      setMaxTemp(result.main.temp_max);
      setMinTemp(result.main.temp_min);

    } catch (error) {
        setError(true);
      console.log(error);
    }
  };

  return (
    <div className="p-5">
      <div className="md:flex ">
        <input
          type="text"
          placeholder="Enter a City..."
          className="outline-indigo-600 border-2 border-indigo-300 rounded-full md:rounded-sm pl-4 w-64 py-4 md:mr-7"
          onChange={textInput}
        />

        <button
          onClick={getWeather}
          type="submit"
          className="outline-none  border-none font-bold font-raleway px-12 py-4 mt-6 md:mt-0 rounded-full md:rounded-sm w-64 bg-indigo-300 text-gray-700 transition duration-300 hover:bg-indigo-600 hover:text-white"
        >
          Search
        </button>
      </div>

      {temp && (
        <div className="mt-10 flex flex-col justify-start bg-indigo-200 px-12 py-4 rounded font-raleway text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
          <div className="flex mb-4">
            <p className="w-64 sm:w-41">Temperature:</p>
            <p>{temp} ° C</p>
          </div>
          <div className="flex mb-4 sm:w-41">
						<p className="w-64">Temperature Min:</p>
						<p>{minTemp}° C</p>
					</div>
					<div className="flex">
						<p className="w-64 sm:w-41">Temperature Max:</p>
						<p>{maxTemp}° C</p>
					</div>
        </div>
      )}

      {error && (
        <div className="mt-10 bg-red-200 px-12 py-4 rounded text-xl font-semibold text-gray-700 sm:text-base sm:px-8">
          <p> Couldn't fetch weather results.</p>
        </div>
      )}
    </div>
  );
}

export default FormInput;
