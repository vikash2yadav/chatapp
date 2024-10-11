import PropTypes from 'prop-types';
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading, isAdded = false }) => {
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={user?.avatar} alt={user?.name} />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {user?.name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main": "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.main" : "primary.dark",
            },
          }}
          onClick={() => handler(user?._id)}
          disabled={handlerIsLoading}
        >
          {
            isAdded ? <RemoveIcon/> : <AddIcon />
          }
        </IconButton>
      </Stack>
    </ListItem>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  handler: PropTypes.func.isRequired,
  handlerIsLoading: PropTypes.bool.isRequired,
  isAdded: PropTypes.bool.isRequired,
};

export default memo(UserItem);
