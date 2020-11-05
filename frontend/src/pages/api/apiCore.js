import axios from 'axios';

export const getAllCandidates  = () => {
  return fetch(`${process.env.REACT_API_URL}/get/?key=${process.env.REACT_API_RE_KEY}&scope=candidate&fields=firstName&page=1`, {
      method: "GET"
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};

 export  const submitSearch = ( data ) => {
    //console.log(data)
 }