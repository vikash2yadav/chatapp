import { useInputValidation } from "6pp";
import { Paper, Container, Typography, TextField, Button } from "@mui/material";
import { Navigate } from "react-router-dom";

let isAdmin = true;

const AdminLogin = () => {
  const seckretKey = useInputValidation();

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (isAdmin) return <Navigate to="/admin/dashboard" />;
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgb(200,200,200,0.5), rgb(120,110,220,0.5))",
      }}
    >
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
          {
            <>
              <Typography variant="h5">Admin Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={submitHandler}
              >
                <TextField
                  required
                  fullWidth
                  label="Seckret Key"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={seckretKey.value}
                  onChange={seckretKey.changeHandler}
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
              </form>
            </>
          }
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
