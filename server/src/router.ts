import { Router } from "express";
import { CreatePostScreen, FeedScreen, ProfileScreen } from "./screens";
import { TrendNewsComponent, TrendTemp } from "./components/trend_news";
import { SeparatorComponent, SeparatorVerticalComponent } from "./components/separator";
import { PublisherCard } from "./components/publisher_card";
import { AllTrends } from "./screens/all_trends";
import { Component, ListKind, UpdateEvent } from "duit_js";
import { trendNews2 } from "./mock/trends";
import { SvgExample } from "./screens/svg_example";
import { ComponentExample } from "./components/component_example";
import { ComponentDemo } from "./screens/component_demo";

export const router = Router();

router.get("/components", async (req, res) => {
    res.json([TrendNewsComponent, SeparatorComponent, PublisherCard, SeparatorVerticalComponent, TrendTemp, ComponentExample]);
});

router.get("/svg_example", async (req, res) => {
    res.send(SvgExample());
});

router.get("/c_demo", async (req, res) => {
    res.send(ComponentDemo());
});

router.get("/feed", async (req, res) => {
    res.send(FeedScreen());
});
router.get("/profile", async (req, res) => {
    res.send(ProfileScreen());
});
router.get("/create_post", async (req, res) => {
    res.send(CreatePostScreen());
});

router.get("/all_trends", async (req, res) => {
    res.send(AllTrends());
});

var counter = 0;

router.get("/get_trends", async (req, res) => {
    counter += 10;
    const arr = trendNews2(counter).map((trend) => Component(trend));
    res.json(UpdateEvent(
        {
            "tl": {
                "type": ListKind.separated,
                "separator": Component({
                    data: {},
                    tag: SeparatorVerticalComponent.tag
                }),
                "childObjects": arr,
            }
            
        }
    ))
});