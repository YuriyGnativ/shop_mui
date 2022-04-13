import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@mui/styles";

import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // const [state, setState] = useState(0);
  // useEffect(() => {
  //   console.log(`init render`);
  //   console.log(state);
  // }, []);

  const renderCounter = useRef(0);
  useEffect(() => {
    renderCounter.current = renderCounter.current + 1;
    console.log(`rerendered ${renderCounter.current} times`);
  });

  return (
    <Card sx={{ minHeight: "350px", maxWidth: "250px" }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Rerender Card
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            renderCounter.current = renderCounter.current + 1;
            console.log(`rerendered ${renderCounter.current} times`);
          }}
        >
          Reload
        </Button>
      </CardActions>
    </Card>
  );
};
