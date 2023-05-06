import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});
const TourCard = ({ tour }) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={2}>
          <img src={tour.image} alt="Image1" className="img" />
          <Box paddingX={2}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 15 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {" "}
                {tour.duration} days
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Rating
                value={tour.rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography marginLeft={1} component="p" variant="body1">
                {tour.rating}
              </Typography>
              <Typography marginLeft={2} component="p" variant="body2">
                ({tour.numberOfReviews} reviewers)
              </Typography>
            </Box>
            <Typography paddingY={2} variant="h6 " component="p">
              Giá vé: {tour.price} đ/vé
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
