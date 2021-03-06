
// Decoder is used to take in a Uint8array and decode into UTF-8
let decoder = new TextDecoder("utf-8")


// Pass in props(fetch data) + the index (i) to pass through array and grab data as needed!
function renderData(props){  

    if(props.data != null){
      try{

      let arrayBuffer = new Uint8Array(props.data.file.data)
      let decodedArray = decoder.decode(arrayBuffer)
      return(
        decodedArray
      )
      }catch(err){
        console.log(err)
      }
  }}

  export {renderData}