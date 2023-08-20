import { Box } from "@mui/material";

const UserImage = ( { image, size="60px"}) => {
    return (
        <Box>
            <img 
                style={{objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`https://connectx-server-141e1e495080.herokuapp.com/assets/${image}`}
            />
        </Box>
    )
}

export default UserImage;