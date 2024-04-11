const API_KEY = "183a9c80-d2fc-4aea-b91c-ef0e5a7693ab";

export const  getMatchInfo = () => {
    const url = `https://api.cricapi.com/v1/
    currentMatches/${API_KEY}`;

    return fetch(url)
    .then((res) => res.json)
    .catch((err) => console.log(err));
};
 
// export const getMatchScore = (id) => {
//     const url = `https://api.cricapi.com/v1/cricScore?apiKey=`
// }