import { Grid } from "@mui/material"

const Sidebar = () => {
  return(<>Sidebar</>)
}

const AdminLayout = ({ children }) => {
  return (
    <Grid container minHeight={"100vh"}>
      <Grid item md={4} lg={3} sx={{
        display: { xs: "none" , md: "block"}
      }}>
        <Sidebar />
      </Grid>

      <Grid item xs={12} md={8} lg={9} sx={{bgcolor: "",}}>
      {children}
      </Grid>
    </Grid>
  )
}

export default AdminLayout