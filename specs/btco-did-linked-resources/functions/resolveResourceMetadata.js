const resolveResourceMetadata = didUrl => {
  const [_, satNumber, identifier] = didUrl.match(/^did:btco:(\d+)\/([a-f0-9]+i\d+|\d+)\/metadata$/);
  
  const getInscriptionId = identifier.match(/^\d+$/) ?
    fetch(`/r/sat/${satNumber}/at/${identifier}`).then(r => r.json()).then(data => data.inscription_id) :
    Promise.resolve(identifier);

  return getInscriptionId.then(inscriptionId => 
    Promise.all([
      fetch(`/r/metadata/${inscriptionId}`).then(r => r.json()),
      fetch(`/r/sat/${satNumber}`).then(r => r.json())
    ]).then(([metadata, satInfo]) => 
      satInfo.inscriptions.some(i => i.inscription_id === inscriptionId) ? 
        metadata : Promise.reject('Invalid Resource')
    )
  );
}; 