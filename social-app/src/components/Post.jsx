import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
    return(
        <Card sx={{margin: 5, marginTop: 0}}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVert />
            </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        />
        <CardMedia
        component="img"
        height="15%"
        image="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
            <Share />
        </IconButton>
        </CardActions>
    </Card>
    )
}

export default Post