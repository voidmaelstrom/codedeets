
import {useState} from 'react';
import axios from 'axios'

const Form = () => {

  //First try at file upload
  // a local state to store the currently selected file.
  /*
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    if(selectedFile){
        formData.append("file", selectedFile, 'test.md');
    }
    //formData.append('tag', 'javascript')
    console.log(selectedFile)
    
    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data"},
        body: formData
      });
    } catch(error) {
      console.log(error)
    }
  }
  //Possibly use filereader, read as arraybuffer
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  */

//SECOND ATTEMPT USING EXAMPLE FROM: https://www.filestack.com/fileschool/react/react-file-upload/

const [file, setFile] = useState()

function handleChange(e){
  setFile(e.target.files[0])
}

//POST call
function handleSubmit(e) {
  e.preventDefault()
  const url = 'http://localhost:5000/posts'
  const formData = new FormData()
  formData.append('file', file)
  formData.append('fileName', file.name)
  const config = {
    headers: {
      'content-type' : 'multipart/form-data'
  }
}
  axios.post(url, formData, config).then((response) => {
    console.log(response.data)
  })
}


  return (
    <form onSubmit={handleSubmit}>
      <h1>File Upload Test</h1>
      <input type="file" onChange={handleChange}/>
      <button type="submit">Upload</button>
    </form>

  )
};

export default Form;