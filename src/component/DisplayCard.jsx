import { useState } from "react";
import DataCard from "./DataCard";

const DisplayCard = () => {
  const [location, setLocation] = useState("");
  const [displayWeathers, setDisplayWeathers] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const dataFetch = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=metric`;
    if (!location) {
      return alert("please put valid location");
    }
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        console.log("data fetching error");
        setError(true);
        setIsLoading(false);
        setDisplayWeathers("");
        return;
      }
      const data = await response.json();
      setDisplayWeathers(data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };

  function handleChange(e) {
    setLocation(e.target.value);
  }

  function handleSubmit() {
    dataFetch();
  }
  return (
    <div className="bg-white-800 flex justify-center items-center min-h-screen text-black font-shareTech">
      <div className="bg-yellow w-[450px] h-[580px] flex  items-center flex-col border-t-[4px] border-l-[4px] border-r-[12px] border-b-[12px] border-black">
        <div className="p-8 flex flex-row">
          <input
            className="border-black border-[4px] w-[300px] h-[64px] text-xl pl-3"
            value={location}
            onChange={handleChange}
            placeholder="Enter location"
          />
          <button
            className="border-black border-y-[4px] border-r-[6px] p-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="text-left">
          {isLoading && <p>Loading...</p>}
          {error && (
            <p className="pl-5 text-wrap">
              Location is not available. Please put valid location
            </p>
          )}
          {displayWeathers && (
            <DataCard
              datas={displayWeathers}
              description={displayWeathers.weather}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
