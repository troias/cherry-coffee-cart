import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import coffeePic from "../public/complete-service-small.png";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import cart from "../public/cart.jpg";
import CardContent from "@material-ui/core/CardContent";
import coffeeCup from "../Assets/images/complete-service-small.png";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 160,
  },
  media: {
    height: "100",
    paddingTop: "56.25%", // 16:9
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexDirection: "row",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  const [openState, setOpenState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickHandler = () => {};
  console.log("openState", openState);
  return (
    <Grid container spacing={3} direction="column" color="white">
      <Grid item xs={12}>
        {/* nav section */}

        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </IconButton>
            <Typography variant="h6">Logo</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid item xs={12}>
        {/* //Hero Section */}
        <Paper>
          <Container>
            <Image alt="cart" src={cart} />
            <Button>Call to action</Button>
          </Container>
        </Paper>
      </Grid>



      <Grid item xs={12}>
        <Paper>About</Paper>
      </Grid>
      <Grid item xs={12} alignContent="center">
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#f1e1e1",
          }}
        >
          <CardMedia
            component="img"
            className={classes.cardMedia}
            src="/complete-service-small.png"
            title="Coffee cup"
            style={{ height: "100%", alignSelf: "center" }}
          />

          <CardContent>
            <Typography variant="h3">Complete Service</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              We provide complete mobile coffee service for your next event
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Paper>barista</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>Pricing</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>Request a booking</Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Paper>
      </Grid>
      {props.children}
    </Grid>
  );
};
export default function Home() {
  const theme = useTheme();
  console.log("theme", theme);

  return (
    <Box>
      <Layout>
        <Container>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Container>
      </Layout>
    </Box>
  );
}
