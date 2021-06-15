const axios = require('axios')
const fs = require('fs')

exports.test = () => {
    axios.get('http://localhost:1000/song')
    .then(res => {   
      fs.readFile('./data/get.json', (err,data) => {
          if(err) return console.log('http://localhost:1000/test failed : not found get.json file')
          let json = JSON.parse(data)
          if (res.data == json.song)
            console.log('http://localhost:1000/test  result: passed')
          else 
            console.log('http://localhost:1000/test result: ** not pass **')
      })
    })
    .catch(err => {
      console.log('http://localhost:1000/test result: ** not pass **')
    })

    axios.get('http://localhost:1000/name')
    .then(res => {   
      fs.readFile('./data/get.json', (err,data) => {
          if(err) return console.log('http://localhost:1000/name failed : not found get.json file')
          let json = JSON.parse(data)
          if (res.data == json.name)
            console.log('http://localhost:1000/name  result: passed')
          else 
            console.log('http://localhost:1000/name result: ** not pass **')
      })
    })
    .catch(err => {
      console.log('http://localhost:1000/name result: ** not pass **')
    })

    axios.get('http://localhost:1000/lyrics')
    .then(res => {   
      fs.readFile('./data/get.json', (err,data) => {
          if(err) return console.log('http://localhost:1000/lyrics failed : not found get.json file')
          let json = JSON.parse(data)
          if (res.data == json.lyrics)
            console.log('http://localhost:1000/lyrics  result: passed')
          else 
            console.log('http://localhost:1000/lyrics result: ** not pass **')
      })
    })
    .catch(err => {
      console.log('http://localhost:1000/lyrics result: ** not pass **')
    })

    fs.unlink('./data/copy.json',(err) => {
        axios.get('http://localhost:1000/copy')
        .then(res => {   
          fs.readFile('./data/get.json', (err,dataGet) => {
              if(err) return console.log('http://localhost:1000/copy failed : not found get.json file')
              fs.readFile('./data/copy.json', (err,dataCopy) => {
                if(err) return console.log('http://localhost:1000/copy failed : copy.json file is not created')
                dataGet = JSON.parse(dataGet)
                dataCopy = JSON.parse(dataCopy)
                if(dataGet.name == dataCopy.name && dataGet.song == dataCopy.song && dataGet.lyrics == dataCopy.lyrics) 
                  console.log('http://localhost:1000/copy  result: passed')
                else console.log('http://localhost:1000/copy result: ** not pass **')
              })
          })
        })
        .catch(err => {
          console.log('http://localhost:1000/copy result: ** not pass **')
        })
    })

}
