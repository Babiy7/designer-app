import React from "react";
import classes from "./Works.module.scss";

import { connect } from "react-redux";
import { CHANGE_CATEGORY } from "../../store/actionTypes";

import Button from "../../components/UI/Button/Button";
import NavWorks from "../../components/Sections/Works/NavWorks";
import Portfolios from "../../components/Sections/Works/Portfolios";
import {
  ContentCenterHorisontal,
  Margin
} from "../../components/UI/Helper/Helper";

const Works = props => {
  const handleCategory = category => {
    props.change(category);
  };

  const filteredPortfolios = props.portfolios.filter(portfolio => {
    if (props.category === "All") {
      return true;
    } else {
      if (props.category) {
        return portfolio.category === props.category;
      }
    }
    return true;
  });

  return (
    <div id="works" className={classes.Works}>
      <div className={classes.Container}>
        <NavWorks handleCategory={handleCategory} />

        <Portfolios portfolios={filteredPortfolios} category={props.category} />

        <ContentCenterHorisontal>
          <Margin top="35">
            <Button type="normal">Load more work</Button>
          </Margin>
        </ContentCenterHorisontal>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  category: state.works.category,
  portfolios: state.works.portfolios
});

const mapDispatchToProps = dispatch => ({
  change: category =>
    dispatch({ type: CHANGE_CATEGORY, payload: { category: category } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Works);
