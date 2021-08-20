import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// own components:
import UploadFile from "../components/UploadFile";
import { useState } from "react";
import { Card } from "@material-ui/core";

// own utils:

import { getHinchaFirstExercise, getRacingAverageAge } from "./utils";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [HinchasConEstudiosYCasados, setHinchasConEstudiosYCasados] =
    useState();

  const [hinchasAverageAge, sethinchasAverageAge] = useState(undefined);

  const handleFileLoad = (dataArr) => {
    setHinchasConEstudiosYCasados(getHinchaFirstExercise(dataArr));
    sethinchasAverageAge(getRacingAverageAge(dataArr));
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

          {data && (
            <Typography variant="h5" component="h5">
              Cantidad total de Registros {data.length}
            </Typography>
          )}

          {hinchasAverageAge && (
            <Typography variant="h5" component="h5">
              Edad promedio hinchas de Racing: {hinchasAverageAge.toFixed(2)}
            </Typography>
          )}

          <div className="Card-ListaContainer">
            {HinchasConEstudiosYCasados && (
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div">
                    Hinchas con estado civil = casado y estudios = Universitario
                  </ListSubheader>
                }
              >
                {HinchasConEstudiosYCasados.map((hincha) => (
                  <ListItem button>
                    <ListItemText
                      primary={`${hincha.nombre}, ${hincha.edad}`}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
