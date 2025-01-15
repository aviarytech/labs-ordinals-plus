const resolveSatCollectionPage = (satNumber, page = 0) => 
  fetch(`/r/sat/${satNumber}/${page}`).then(r => r.json());

const resolveReinscriptionCollection = didUrl => 
  fetch(`/r/sat/${didUrl.match(/^did:btco:(\d+)\/inscriptions$/)[1]}/0`)
    .then(r => r.json())
    .then(({ inscriptions: firstPage, more }) => {
      let all = [...firstPage], page = 1;
      const getNext = () => more ? resolveSatCollectionPage(didUrl.match(/^did:btco:(\d+)\/inscriptions$/)[1], page++)
        .then(({ inscriptions: pageInscriptions, more: hasMore }) => {
          all.push(...pageInscriptions);
          more = hasMore;
          return getNext();
        }) : all;
      return getNext().then(inscriptions => 
        inscriptions.map(({ inscription_id }) => 
          `did:btco:${didUrl.match(/^did:btco:(\d+)\/inscriptions$/)[1]}/${inscription_id}`));
    });