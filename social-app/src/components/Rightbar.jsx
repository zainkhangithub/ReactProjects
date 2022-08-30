import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{
        display: {
            xs: "none",
            sm: "block"
        }
    }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100} mb={2}>Online Friends</Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1619380762385-cfc95146eea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2UlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1611608822650-925c227ef4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2UlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2UlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2UlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          </AvatarGroup>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
          <ImageList cols={3} gap={5} rowHeight={100}>
              <ImageListItem >
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
              </ImageListItem>
              <ImageListItem >
                <img src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              </ImageListItem>
              <ImageListItem >
                <img src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
              </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1619380762385-cfc95146eea1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2UlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
    </Box>
  )
}

export default Rightbar