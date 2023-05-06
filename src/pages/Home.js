import TourCard from "../component/TourCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import cities from "../data.json"

function Home()
{
    return(
        <div className="container">
        <Container sx={{ marginY: 5 }}>
          {cities.map((card) => (
            <>
              <Typography paddingY={2} paddingX={0.5} variant="h4" component="h1">
                {card.name}
              </Typography>
              <Grid container spacing={2}>
                {card.tours.map((tour,index) => (
                  <TourCard tour={tour} key={index}  />
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </div>
    )
}
export default Home; 