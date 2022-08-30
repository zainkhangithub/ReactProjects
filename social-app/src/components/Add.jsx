import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { useState } from 'react'

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

const Add = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Tooltip onClick={() => setOpen(true)} title="Delete" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md:30}}}>
        <IconButton>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3}  bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
          <UserBox>
            <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            sx={{width: 30, height: 30}}
            />
            <Typography fontWeight={500} variant="span">
              Zain Khan
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{width: "100%"}}
            multiline
            rows={3}
            placeholder="Let's write a post"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primar" />
            <Image color='secondary'  />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width: "100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>

        
      </StyledModal>
    </>
  )
}

export default Add