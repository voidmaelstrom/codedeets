
import React from 'react';


const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

 


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    if(selectedFile){
        formData.append("file", selectedFile, 'test.md');
    }
    //formData.append('tag', 'javascript')
    console.log(selectedFile)
    
    try {
      const response = await fetch("http://localhost:5050/posts", {
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

  return (
    <form onSubmit={handleSubmit} action="/posts" method='POST'>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
  )
};

export default Form;