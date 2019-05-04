let getData = () => {
    return new Promise(resolve =>{
        setInterval( () => {
            fetch(
              "https://api.apixu.com/v1/current.json?key=090b6b7cb1a744eabfa31259190205&q=Santiago"
            )
              .then(resp => {
                console.log("respuesta: ", resp.status);
                return resp.json();
              })
              .then(data => {
                console.log(data.location.name);
                console.log(data.current.condition.text);
                console.log(data.current.temp_c);
                console.log(data.current.wind_kph);
              });
        }, 8000)
    } )
}

async function readInfo() {
    console.log('waiting data from server ...');
    const info = await getData();
    console('response: ', info);
}

readInfo();
