import React from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/joy";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/joy/Stack";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import ButtonGroup from "@mui/material/ButtonGroup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Userbox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "15px",
  marginLeft: "5px"
});
const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
function Addbtn() {
  const [open, setopen] = React.useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setopen(true)}
        title="Add Item"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: "30px" }
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width="400px"
          height="300px"
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius="10px"
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <Userbox>
            <Avatar
              onClick={(e) => setopen(true)}
              src="data:image/jpeg;base64,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"
            ></Avatar>
            <Typography variant="span" fontWeight="300">
              Sahdev Rajput
            </Typography>
          </Userbox>
          <TextField
            id="standard-basic"
            label="What's On your Mind?"
            variant="standard"
            sx={{ width: "100%", marginLeft: "10px" }}
          />
          <Stack direction="row" gap={1} ml={2} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary" />
            <VideocamIcon color="success" />
            <ImageIcon color="error" />
            <RecordVoiceOverIcon color="secondary" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ width: "80%" }}>Posts</Button>
            <Button>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Addbtn;
