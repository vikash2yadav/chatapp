import { IconButton, Stack } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import { Fragment, useRef } from "react";
import { gray, orange } from "../constant/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";

const Chat = () => {
  const containRef = useRef(null);

  return (
    <Fragment>
      <Stack
        ref={containRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={gray}
        height={"90%"}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      ></Stack>

      <form
        style={{
          height: "10%",
          width:"100%"
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
          sx={{
            position: "absolute",
            left: "1.5rem",
            rotate: "30deg"
          }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox  placeholder="Type Message Here..."/>

          <IconButton type="submit" sx={{
            rotate: "-30deg",
            bgcolor: orange,
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover": {
              bgcolor: "error.dark", 
            },
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
    </Fragment>
  );
};

export default AppLayout()(Chat);
