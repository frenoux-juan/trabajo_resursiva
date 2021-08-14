import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// own components:
import UploadFile from "../components/UploadFile";
import { useState } from "react";
import Hincha from "../hincha";
import { Card } from "@material-ui/core";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFileLoad = (dataArr) => {
    console.log(dataArr.slice(0, 10));

    const dataFiltered = dataArr.filter((hincha) => {
      return (
        hincha.estadoCivil === "Casado" && hincha.estudios === "Universitario"
      );
    });
    console.log(dataFiltered);

    function compare(hincha1, hincha2) {
      if (hincha1.edad < hincha2.edad) {
        return -1;
      }
      if (hincha1.edad > hincha2.edad) {
        return 1;
      }
      return 0;
    }
    const sorted = dataFiltered.sort(compare);
    console.log(sorted.slice(0, 10));
    setData(dataArr);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Hinchas App</Typography>
        </Toolbar>
      </AppBar>

      <div className="Card-container">
        <Card className="Card" elevation={3}>
          <UploadFile setLoading={setLoading} onFileLoad={handleFileLoad} />
        </Card>
      </div>
    </div>
  );
};

export default App;
