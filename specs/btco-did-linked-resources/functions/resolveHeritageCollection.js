const resolveChildCollectionPage = (inscriptionId, page = 0) => 
  fetch(`/r/children/${inscriptionId}/inscriptions/${page}`).then(r => r.json());

const resolveChildCollection = didUrl => {
  const [_, satNumber] = didUrl.match(/^did:btco:(\d+)\/children$/);
  return fetch(`/r/sat/${satNumber}/at/0`)
    .then(r => r.json())
    .then(({ id }) => {
      let all = [], page = 0;
      const getNext = () => resolveChildCollectionPage(id, page++)
        .then(({ children: pageInscriptions, more }) => {
          all.push(...pageInscriptions);
          return more ? getNext() : all;
        });
      return getNext().then(inscriptions => 
        inscriptions.map(({ sat, id }) => 
          `did:btco:${sat}/${id}`));
    });
};

const resolveChildAtIndex = didUrl => {
  const [_, satNumber, index] = didUrl.match(/^did:btco:(\d+)\/children\/(\d+)$/);
  
  return fetch(`/r/sat/${satNumber}`).then(r => r.json())
    .then(satInfo => {
      if (index >= satInfo.ids.length) {
        return Promise.reject('Invalid Resource');
      }
      const inscriptionId = satInfo.ids[index];
      return resolveResourceFullyQualified(`did:btco:${satNumber}/${inscriptionId}`);
    });
};
