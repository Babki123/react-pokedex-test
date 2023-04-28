export  const fetchPokeData = async (url) =>{
    const data = await fetch(url)
                        .catch((e)=> console.log(e))
                        .then(response => response.json());
    return data;
}