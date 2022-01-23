import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from '@material-ui/core';
import { Buffer } from 'buffer';
import Alert from "./Components/alerts";

global.Buffer = Buffer;
function App() {
  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coin/:id" element={<Coinpage />} exact />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
