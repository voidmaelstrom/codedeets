import React from 'react';


const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", selectedFile, 'test.md');
    //formData.append('tag', 'javascript')
    console.log(selectedFile)
    
    try {
      const response = await fetch("http://localhost:5050/posts", {
        method: "post",
        headers: { "Content-Type": "multipart/form-data"},
        body: formData
      });
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit} action="/" method='post'>
      <input type="file" onChange={handleFileSelect}/>
      <input type="submit" value="Upload File" />
    </form>
  )
};

export default Form;