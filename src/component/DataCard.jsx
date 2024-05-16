/* eslint-disable react/prop-types */

const DataCard = ({ datas, description }) => {
  return (
    <>
      <h1 className="text-[36px]">{datas.name}</h1>
      <p className="text-5xl pb-5 pt-5">{datas.main.temp}°</p>
      <p className="text-3xl pb-4 pt-4 ">Humidity: {datas.main.humidity}</p>
      
      {description.map((data) => 
        (<p className="text-3xl pb-4 pt-4" key={data.id}>{data.description}</p>)
      )}
      <p className="text-3xl pb-4 pt-4 ">Wind Speed: {datas.wind.speed}kmh</p>
    </>
  );
};

export default DataCard;
