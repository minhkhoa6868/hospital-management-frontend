import './LogoCorner.css'
import EmergencyOutlinedIcon from "@mui/icons-material/EmergencyOutlined";
import Stack from "@mui/material/Stack";

const LogoCorner = () => {
  return (
    <div className="logo">
      <Stack
        alignItems="center"
        direction="row"
        gap={1}
        backgroundColor="transparent"
      >
        <EmergencyOutlinedIcon sx={{ fontSize: 28 }} />
        Logo
      </Stack>
    </div>
  )
};

export default LogoCorner;