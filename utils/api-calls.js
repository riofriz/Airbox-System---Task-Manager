export const get = async (url) => {
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json).catch((err) => {
      console.log(`error: ${err}`);
    });
};

export const post = async (url, body) => {
  const options = {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: JSON.stringify(body),
  };

  return fetch(url, options).then((res) => res).catch((error) => error);
};
