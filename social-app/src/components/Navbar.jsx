import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { ConnectWithoutContact, Mail, Notifications } from '@mui/icons-material'
import { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({theme}) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))

    const Icons = styled(Box)(({theme}) => ({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]:{
            display: "flex"
        }
    }))

    const UserBox = styled(Box)(({theme}) => ({
        display: "none",
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.down("sm")]:{
            display: "flex"
        }
    }))

  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}}>SOCIAX</Typography>
            <ConnectWithoutContact sx={{ display: { xs: "block", sm: "none"}}}></ConnectWithoutContact>
            <Search>
                <InputBase placeholder="Search..." />
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar onClick={(e) => setOpen(true)} sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
                <Avatar sx={{width: 30, height: 30}} src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <Typography variant="span">Zain</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar