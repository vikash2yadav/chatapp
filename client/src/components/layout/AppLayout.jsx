import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import Chatlist from "../specific/Chatlist";
import { samplechats } from "../../constant/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    const params = useParams();
    const chatId = params?.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
    }

    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}
          >
            <Chatlist
              chats={samplechats}
              chatId={chatId}
              newMwssagesAlert={[
                {
                  chatId,
                  count: 4,
                },
              ]}
              onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>

          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", sm: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
