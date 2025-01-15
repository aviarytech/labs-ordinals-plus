const resolveResourceRelative = (didUrl) => {
  const [_, satNumber, index] = didUrl.match(/^did:btco:(\d+)\/(\d+)$/);
  return fetch(`/r/sat/${satNumber}/at/${index}`)
    .then(r => r.json())
    .then(({ id }) => fetch(`/content/${id}`).then(r => r.blob()));
};