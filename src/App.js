import React from 'react';
import './App.css';
import { AppBar, Container, IconButton, Toolbar, Typography, Box, Button, Paper, Grid, CardContent, CardActions, Card, CardMedia, BottomNavigation, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

//import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';


import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
root:{
  flexGrow: 1
},
menuButton: {
  marginRight: theme.spacing(1)
},
title: {
  flexGrow: 1 
},

mainFeaturesPost: {
  position: "relative",
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
},

overlay: {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.5)"
},

mainFeaturesPostContent:{
  position: "relative",
  padding: theme.spacing(6),
  marginTop: theme.spacing(8),


},

cardMedia: {
  paddingTop: "56.25%"
},

cardContent: {
  flexGrow: 1
},

cardGrid: {
  marginTop: theme.spacing(4)

}
 
}))

const card = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <h1>Владос хуесос! </h1>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
<IconButton edge="start" color="inherit" aria-lable="menu" className={classes.menuButton}>
  <MenuIcon>  </MenuIcon>
</IconButton>
<Typography variant="h6" className={classes.title}>Web Developer Blog</Typography>
<Box mr={3}>
  <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
  <Dialog open={open} onClose={handleClose} aria-lablledby="form-dialog-title">

    <DialogTitle id="form-dialog-title">Log In</DialogTitle>
    <DialogContent>
<DialogContentText> Log in to see videos </DialogContentText>
<TextField
autoFocus
margin="dense"
id="name"
lable="Email Adress"
type="email"
fullWidth
/>
<TextField
autoFocus
margin="dense"
id="pass"
lable="Password"
type="password" 
fullWidth
/>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">Cancel</Button>
      <Button onClick={handleClose} color="primary">Log In</Button>
      </DialogActions>  
  </Dialog>
</Box>
<Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>

      </Container>
    </AppBar>

<main>
  <Paper className={classes.mainFeaturesPost}
  style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
    <Container fixed>
    <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturesPostContent}>
            <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
            >
              Wed Developer Blog
            </Typography>
            <Typography
            variant="h5"
            color="inherit"
            paragraph
            >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati minima iste laboriosam repellat alias porro fugit perferendis, esse iusto nobis, repellendus aperiam magni modi maiores nulla aut sed animi.
            </Typography>
            <Button variant="contained" color="secondary">
              Learn more
            </Button>
        </div>
        </Grid>
      </Grid>
    </Container>
  </Paper>
  <div className={classes.mainContent}>
    <Container maxWidth="md">
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Web Developer Blog
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quasi nam dicta non inventore aspernatur ipsa accusamus cumque? Illum, delectus! Eius vero at officia consequatur quasi officiis, vel accusamus quas.  Voluptatem quasi nam dicta non inventore aspernatur ipsa accusamus cumque? Illum, delectus! Eius vero at officia consequatur quasi officiis, vel accusamus quas.
      </Typography>
      <div className={classes.mainButtons}>
        <Grid container spacing={5} justify="center">
<Grid item>
  <Button variant="contained" color="primary">Start Now</Button>
</Grid>
<Grid item>
  <Button variant="outlined" color="primary">Learn More</Button>
</Grid>
        </Grid>

      </div>
    </Container>

  </div>
  <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4}>
      {card.map((card) => (
<Grid item key={card} xs={12} sm={6} md={4}>
<Card className={classes.card}>
  <CardMedia 
  className={classes.cardMedia}
  image="https://source.unsplash.com/random"
  title="image title"
  />
<CardContent className={classes.cardContent}>
  <Typography variant="h5" gutterBottom>
    Blog post
  </Typography>
  <Typography>
    Blog post of web developer blog!
  </Typography>

</CardContent>
<CardActions>
  <Button size="small" color="primary">View</Button>
  <Button size="small" color="primary">Edit</Button>
  <LayerIcon />
  <PlayCircleFilledIcon />
</CardActions>
</Card>
</Grid>
      ))}


    </Grid>


  </Container>
</main>
<footer>

<Typography variant="h6" align="center" gutterBottom> Footer </Typography>

<BottomNavigation value={value} onChange={handleChange} className={classes.root} gutterBottom >

<BottomNavigationAction lable="Recents" value="recents" icon={<RestoreIcon />} />

<BottomNavigationAction lable="Favorites" value="favorites" icon={<FavoriteIcon />} />

<BottomNavigationAction lable="Nearby" value="nearby" icon={<LocationOnIcon />} />

<BottomNavigationAction lable="Folder" value="folder" icon={<FolderIcon />} />

</BottomNavigation>

<Typography align="center" color="textSecondary" component="p" variant="subtitle1">
  Web developer React JS Material UI site
</Typography>

</footer>


    </>
  );
}

export default App;
