import React from "react";
import classes from "./News.module.scss";

import Article from "../../Article/Article";
import Button from "../../UI/Button/Button";
import { ContentCenterHorisontal } from "../../UI/Helper/Helper";

const News = () => {
  return (
    <section className={classes.News}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h3 className={classes.Title}>read me</h3>
          <div className={classes.Text}>Sometimes i write something smart</div>
        </div>
        <div className={classes.Articles}>
          {[
            {
              title: "ten the best app in 2017",
              category: "category",
              date: "10 June",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat."
            },
            {
              title: "website inspiration",
              category: "category",
              date: "17 June",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat."
            },
            {
              title: "changes in social media",
              category: "category",
              date: "27 June",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat."
            },
            {
              title: "changes in social media",
              category: "category",
              date: "27 June",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat."
            },
            {
              title: "changes in social media",
              category: "category",
              date: "27 June",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat."
            },
            {
              title: "changes in social media",
              category: "category",
              date: "27 June",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque eu enim eget luctus. Sed augue felis, facilisis et elementum vitae, aliquam sit amet ante. Sed iaculis eros sem, elementum consequat."
            }
          ].map(article => {
            let date = article.date.split(" ");

            return (
              <Article
                title={article.title}
                category={article.category}
                number={date[0]}
                month={date[1]}
              >
                {article.text}
              </Article>
            );
          })}
        </div>
        <ContentCenterHorisontal>
          <Button type="normal">See more posts</Button>
        </ContentCenterHorisontal>
      </div>
    </section>
  );
};

export default News;
