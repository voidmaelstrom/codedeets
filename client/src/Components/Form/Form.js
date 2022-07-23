import {useState} from 'react';
import axios from 'axios'

const Form = () => {

const [file, setFile] = useState()

function handleChange(e){
  setFile(e.target.files[0])
}

//POST call
function handleSubmit(e) {
  e.preventDefault()
  // const url = 'http://localhost:5000/posts/9/uploadFile'
  const url = 'http://localhost:5000/posts'
  const formData = new FormData()
  formData.append('file', file)
  formData.append('tag', 'TestingTagPostCreate')
  formData.append('user_id', 3)
  formData.append('fileName', file.name)
  const config = {
    headers: {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
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
      <input type="file" name="fileName" onChange={handleChange}/>
      <button type="submit">Upload</button>
    </form>

  )
};

export default Form;