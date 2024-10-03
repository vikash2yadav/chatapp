import {
  Paper,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CameraAlt from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useInputValidation } from "6pp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const username = useInputValidation("");
  const password = useInputValidation("");

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                name={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                name={password.value}
                onChange={password.changeHandler}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                {" "}
                Login{" "}
              </Button>
              <Typography textAlign="center" m={"1rem"}>
                Or
              </Typography>
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                <IconButton
                  component="label"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                name={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                name={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                name={password.value}
                onChange={password.changeHandler}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                {" "}
                Sign Up{" "}
              </Button>
              <Typography textAlign="center" m={"1rem"}>
                Or
              </Typography>
              <Button
                sx={{ marginTop: "1rem" }}
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
