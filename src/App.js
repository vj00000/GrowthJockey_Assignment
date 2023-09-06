import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Box1">
      <div className="App outerBox">
        <div className="Pass">
          <div>PS3&SVBIA </div>
          <div className="copy">
            {" "}
            <ContentCopyIcon></ContentCopyIcon>
          </div>
        </div>
        <form action="/form" method="get">
          <div>
            <div className="slider flex_v">
              <p className="c_l">Character length</p>
              <Box sx={{ width: 200 }}>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  alignItems="center"
                >
                  <Slider
                    aria-label="Volume"
                    value={value}
                    onChange={handleChange}
                  />
                </Stack>
              </Box>
            </div>
            <div className="check">
              <input
                className="check"
                type="checkbox"
                name="vehicle1"
                value="Bike"
              ></input>
              <label className="slider" for="vehicle1">
                {" "}
                Include Uppercase letter
              </label>
              <br></br>
            </div>
            <div className="check">
              <input
                className="check"
                type="checkbox"
                name="vehicle2"
                value="Car"
              ></input>
              <label className="slider" for="vehicle2">
                {" "}
                Include Lowercase letter
              </label>
              <br></br>
            </div>

            <div className="check">
              <input
                className="check"
                type="checkbox"
                name="vehicle3"
                value="Boat"
              ></input>
              <label className="slider" for="vehicle3">
                {" "}
                Include number
              </label>
              <br></br>
            </div>
            <div className="check">
              <input
                className="check"
                type="checkbox"
                name="vehicle3"
                value="Boat"
              ></input>
              <label className="slider" for="vehicle3">
                {" "}
                Include Symbols
              </label>
            </div>
            <br></br>
            <br></br>

            <div className="strength">
              <div>STRENGTH</div>
            </div>
            <br></br>
          </div>
          <Button
            variant="contained"
            className="bg-btn"
            type="submit"
            form="form"
            value="Submit"
          >
            GENERATE
          </Button>
        </form>
      </div>
    </div>
  );
}
