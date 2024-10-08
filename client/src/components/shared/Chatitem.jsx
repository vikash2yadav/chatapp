import { Box, Stack, Typography } from "@mui/material";
import { Link } from "../styles/StyledComponents";
import { memo } from "react";
import AvtarCard from "./AvtarCard";

const Chatitem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  samesender,
  isOnline,
  index = 0,
  handleDeleteChat,
  newMessageAlert,
}) => {
  return (
    <Link
      style={{
        padding: "0",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: samesender ? "black" : "unset",
          color: samesender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvtarCard avatar={avatar}/>
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              translate: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(Chatitem);
