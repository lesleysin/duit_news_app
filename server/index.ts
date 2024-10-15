import express from "express";
import bodyParser from "body-parser";
import { router } from "./src/router";
import { TrendNewsComponent } from "./src/components/trend_news";
import { FeedScreen } from "./src";
import { SeparatorComponent } from "./src/components/separator";
import { PublisherCard } from "./src/components/publisher_card";

const app = express();
const port = 8999;

app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});