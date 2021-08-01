import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6"> Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello Notice the use of %PUBLIC_URL% in the tags above. It will be
              replaced with the URL of the `public` folder during the build.
              Only files inside the `public` folder can be referenced from the
              HTML. Unlike "/favicon.ico" or "favicon.ico",
              "%PUBLIC_URL%/favicon.ico" will work correctly both with
              client-side routing and a non-root public URL. Learn how to
              configure a non-root public URL by running `npm run build`. -->
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default App;
