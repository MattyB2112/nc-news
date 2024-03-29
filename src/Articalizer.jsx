import * as React from "react";
import { Button, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import dateFormatter from "./dateFormatter";
import Grid from "@mui/material/Grid";
import { HashLink } from "react-router-hash-link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SortBy from "./SortBy";
const defaultTheme = createTheme();

export default function Articalizer(props) {
  const { articles } = props;

  return (
    <ThemeProvider theme={defaultTheme}>
      <SortBy />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 6 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {articles?.map((article) => (
              <Grid item key={articles.article_id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea component="div">
                    <Link href={`/${article.article_id}`}>
                      <CardMedia
                        component="div"
                        sx={{
                          // 16:9
                          pt: "56.25%",
                        }}
                        image={article.article_img_url}
                        alt={`an image to do with ${article.topic}`}
                      />
                    </Link>
                  </CardActionArea>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {article.topic}
                    </Typography>
                    <Typography>
                      {article.title.length < 53 ? (
                        <p>{article.title}</p>
                      ) : (
                        <p>{article.title.substring(0, 53)}...</p>
                      )}
                      <p>{dateFormatter(article.created_at)}</p>
                      <p className="vote-count-home">{article.votes} Votes</p>
                      <HashLink
                        smooth
                        to={`/${article.article_id}#comments-hash`}
                      >
                        {article.comment_count} Comments
                      </HashLink>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          NC News©
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thanks for visiting!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
