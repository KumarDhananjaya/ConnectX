import { Box } from "@mui/material";

const UserImage = ( { image, size="60px"}) => {
    return (
        <Box>
            <img 
                style={{objectFit: "cover", borderRadius: "50%"}}
                width={size.width}
                height={size.height}
                alt="user"
                src={`http://localhost:3001/assests/${image}`}
            />
        </Box>
    )
}

export default UserImage;