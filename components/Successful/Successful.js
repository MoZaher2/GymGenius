import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export default function Successful() {
  return (
    <Stack
      sx={{
        width: "190px",
        position: "fixed",
        top: "55px",
        left: "50%",
        transform: "translate(-50%)",
        background:"black",
      }}
      spacing={2}
    >
      <Alert variant="outlined" severity="success">
        Successful Process
      </Alert>
    </Stack>
  );
}
