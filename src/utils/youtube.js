export const getTrailer = async (movieName) =>{
    const urlQuery = movieName + " official trailer";
    const url = `https://yt-search.vercel.app/api?query=${urlQuery}`;

    const res = await fetch(url);
    const data = await res.json();

    return data?.videos?.[0]?.videoId;
};