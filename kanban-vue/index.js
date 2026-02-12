const getData = async (url) =>{
    try{
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
          }
        const json = await res.json()
        return json
    }
    catch(e){
        console.error(e.message)
    }
}

const url = 'https://jsonplaceholder.typicode.com/todows'

const data = await getData(url) 

// data?.map(item =>console.log(item.title) )