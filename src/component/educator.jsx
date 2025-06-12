import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
} from "@mui/material";
import { EducatorData } from "../data/educatorData";

const Educator = () => {
  return (
    <Box p={4} bgcolor="rgba(38, 21, 97, 0.5)">
      <Typography
        variant="h5"
        fontWeight="bold"
        fontSize={{ xs: "1.5rem", md: "2.125rem" }}
        color="white"
        textAlign="center"
        mb={4}
      >
        ĐỘI NGŨ ĐÀO TẠO
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {EducatorData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",

                maxWidth: 300,
                margin: "0 auto",
              }}
            >
              {item.type === "video" ? (
                <CardMedia
                  component="video"
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "8px 8px 0 0",
                    pointerEvents: "none",
                    "&::-webkit-media-controls": {
                      display: "none !important",
                    },
                    "&::-webkit-media-controls-panel": {
                      display: "none !important",
                    },
                  }}
                />
              ) : (
                <CardMedia
                  component="img"
                  image={item.src}
                  alt={item.name}
                  sx={{
                    height: "100%",
                    borderRadius: "8px 8px 0 0",
                    objectFit: "cover",
                  }}
                />
              )}
              <CardContent sx={{ padding: "12px", flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="#0E2148"
                  gutterBottom
                  textAlign="center"
                  sx={{ fontSize: "1rem", mb: 1 }}
                >
                  {item.name}
                </Typography>
                <List dense sx={{ padding: 0 }}>
                  {item.description.map((desc, index) => (
                    <ListItem key={index} sx={{ py: 0.25, px: 0 }}>
                      <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                        - {desc}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Educator;
