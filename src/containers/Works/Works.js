import React from "react";
import classes from "./Works.module.scss";

import Button from "../../components/UI/Button/Button";
import NavWorks from "../../components/Sections/Works/NavWorks";
import Portfolios from "../../components/Sections/Works/Portfolios";
import {
  ContentCenterHorisontal,
  Margin
} from "../../components/UI/Helper/Helper";

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      portfolios: [
        { category: "App" },
        { category: "Websites" },
        { category: "Interactions" },
        { category: "App" },
        { category: "Websites" },
        { category: "App" },
        { category: "App" },
        { category: "Interactions" },
        { category: "Interactions" }
      ]
    };
  }

  handleCategory = category => {
    this.setState({ category: category });
  };

  render() {
    const filteredPortfolios = this.state.portfolios.filter(portfolio => {
      if (this.state.category === "All") {
        return true;
      } else {
        if (this.state.category) {
          return portfolio.category === this.state.category;
        } else {
          return true;
        }
      }
    });

    return (
      <div id="works" className={classes.Works}>
        <div className={classes.Container}>
          <NavWorks handleCategory={this.handleCategory} />

          <Portfolios
            portfolios={filteredPortfolios}
            category={this.state.category}
          />

          <ContentCenterHorisontal>
            <Margin top="35">
              <Button type="normal">Load more work</Button>
            </Margin>
          </ContentCenterHorisontal>
        </div>
      </div>
    );
  }
}
export default Works;
