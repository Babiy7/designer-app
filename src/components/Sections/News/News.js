import React from "react";
import classes from "./News.module.scss";

import { connect } from "react-redux";

import Article from "../../Article/Article";
import Button from "../../UI/Button/Button";
import { ContentCenterHorisontal } from "../../UI/Helper/Helper";

const News = props => {
  return (
    <section className={classes.News}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h3 className={classes.Title}>read me</h3>
          <div className={classes.Text}>Sometimes i write something smart</div>
        </div>
        <div className={classes.Articles}>
          {props.news.map(article => {
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

const mapStateToProps = state => ({
  news: state.news.news
});

export default connect(mapStateToProps)(News);
