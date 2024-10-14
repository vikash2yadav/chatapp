import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import {transforImage} from "../../lib/features";

const AvtarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <AvatarGroup>
        <Box width={"5rem"} height={"3rem"}>
          {/* {avatar?.map((i, index) => { */}
            {/* {console.log(i)} */}
            <Avatar
              key={Math.random() * 100}
              src={avatar}
            //   alt={`Avtar ${index}`}
              sx={{
                width: "3rem",
                height: "3rem",
                position: "absolute",
                // left: {
                //   xs: `${0.5 + index}rem`,
                //   sm: `${index}rem`,
                // },
              }}
            />;
          {/* })} */}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvtarCard;
