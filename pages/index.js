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
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexDirection: "row",
  },
  test: {
    background: "black",
  },
  test1: {
    background: "red",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "space-between",
  }
}));

const styl = makeStyles((theme) => ({
  custom: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexDirection: "column",
  },
  button: {
    background: theme.palette.primary,
  },
  customFlex: {
    background: theme.palette.primary,
  },

}));

const Layout = (props) => {
  const classes = useStyles();
  const styles = styl();
  console.log("styles", styles);

  const [openState, setOpenState] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const clickHandler = () => {

  }
  console.log("openState", openState)
  return (
    <Container>
      <Grid container spacing={3} direction="column" color="white">

        <Grid item xs={12}>
          {/* nav section */}
          <Paper className={classes.paper}>

            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >

                  <MenuIcon onClick={handleClick} />
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
                <Typography variant="h6" className={classes.title}>
                  Logo
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {/* //Hero Section */}
          <Paper className={classes.paper}>
            <Container>
              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Grid container xs={12} justifyContent="space-around">
              <Grid item xs={3} align="center" className={classes.test}>
                6
              </Grid>
              <Grid item xs={3} align="center" className={classes.test1}>
                6
              </Grid>
              <Grid item xs={3} align="center" className={classes.test1}>
                6
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} className={styles.footer}>
          <Paper className={classes.paper}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
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
    </Container>
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
