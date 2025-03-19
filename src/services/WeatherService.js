const apiKey = (import.meta.env.VITE_API_KEY);

async function getWeather(formData) {
  const base = `https://api.openweathermap.org/data/2.5/weather`;
  let url = new URL(base);
  console.log(formData);

  const searchParams = [];
  Object.entries(formData).forEach(([key, val]) => {
    if (val) {
      searchParams.push(val);
    }
  });

  console.log(searchParams);
  url.searchParams.append("q", searchParams.join(","));
  url.searchParams.append("units", "metric");
  url.searchParams.append("appid", apiKey);
  console.log(url.href);

  console.log(url.href);
  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data);
  return data;
}

export { getWeather };
