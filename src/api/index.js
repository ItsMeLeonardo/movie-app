export default async function CallApi(params) {
  const {url, method, body, headers} = params;

  try {
    const response = await fetch(url, {
      method,
      body,
      headers,
    })

    const json = await response.json();
    return json;

  } catch (error) {
    Promise.reject('Error in CallAPI')
  }

}

export const getHeaders = () => {
  return {
    "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
    "x-rapidapi-key": "7028af46dcmsh56246c485fca18cp1be055jsnb15ace0594c7",
  };
};