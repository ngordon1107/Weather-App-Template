const apiKey = import.meta.env.VITE_API_KEY = 'd742e5f62522a6e74244f2a004ade1b3';

async function getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    return data;
};

export { getWeather };

