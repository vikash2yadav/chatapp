import { Avatar, Stack } from "@mui/material";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard />
    </Stack>
  );
};

const ProfileCard = ({text, icon, heading}) => <div>ProfileCart</div>;

export default Profile;
