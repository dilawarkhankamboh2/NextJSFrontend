import { useState } from "react";

const ImageUploadDialog = () => {

  const [file, setFile] = useState();

  const fileUpload = (e)=>{

        e.preventDefault()

  }

  return (
    <div>

        <form onSubmit={fileUpload}>
          <input type="file" name="photo" onChange={(e)=> setFile(e.target.value)} />
          <button type="submit">submit</button>
        </form>

    </div>
  );
};

export default ImageUploadDialog;
