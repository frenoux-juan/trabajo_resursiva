import React from "react";
import Hincha from "../../hincha";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const UploadFile = ({ onFileLoad, setLoading }) => {
  const handleFileUpload = async (event) => {
    setLoading(true);

    const archivo = event.target.files[0];
    const reader = new FileReader();

    reader.readAsText(archivo);
    reader.onload = () => {
      const rows = reader.result.split("\r\n");
      const rowsFormated = rows.map((row) => new Hincha(row.split(";")));
      setLoading(false);
      onFileLoad(rowsFormated);
    };
  };

  return (
    <div>
      <form>
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Upload File
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
      </form>
    </div>
  );
};

export default UploadFile;
