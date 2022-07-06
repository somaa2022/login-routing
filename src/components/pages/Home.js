import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>Studies show that shopping isn't just about materialism and torturing the man in your life; it's actually good for your mental and physical health. It releases mood-lifting endorphins, boosts your immune system, keeps your brain nimble, and even fulfills basic social needs.</p>
      </Grid>
    </Grid>
  </>;
};

export default Home;