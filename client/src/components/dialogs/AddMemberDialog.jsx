import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { sampleUser } from "../../constant/sampleData";
import UserItem from "../shared/UserItem";
import { useState } from "react";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    const [members, setMembers] = useState(sampleUser);
    const [selectedMembers, setSelectedMembers] = useState([]);
  
    const selectMemberHandler = (id) => {
      setSelectedMembers((prev) =>
        prev.includes(id)
          ? prev.filter((currElement) => currElement !== id)
          : [...prev, id]
      );
    };

  const addFriendHandler = () => {};

  const closeHandler = () => {
    setSelectedMembers([]);
    setMembers([]);
  };

  const addMemberSubmitHandler = () => {
    closeHandler();
  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>

        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem key={i._id} user={i} handler={selectMemberHandler} isAdded={selectedMembers.includes(i._id)} />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        p={"1rem"}
      >
        <Button color="error" onClick={closeHandler}>
          Cancel
        </Button>
        <Button
          onClick={addFriendHandler}
          variant="contained"
          disabled={isLoadingAddMember}
        >
          Submit Changes
        </Button>
      </Stack>
    </Dialog>
  );
};

AddMemberDialog.propTypes = {
  addMember: PropTypes.bool,
  isLoadingAddMember: PropTypes.func.isRequired,
  chatId: PropTypes.func.isRequired,
};

export default AddMemberDialog;
