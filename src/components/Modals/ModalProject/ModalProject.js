import React from "react";
import classes from "./ModalProject.module.scss";

import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";

const ModalProject = props => {
  return (
    <Modal show={props.show}>
      <div className={classes.ModalProject}>
        <div className={classes.Left}></div>

        <div className={classes.Right}>
          <div className={classes.Content}>
            <h2 className={classes.Title}>PROJECT TITLE</h2>

            <div className={classes.SubTitle}>
              <div className={classes.Category}>CATEGORY</div>
              <div className={classes.Date}>2018</div>
            </div>

            <h4 className={classes.ClientTitle}>Client: </h4>
            <div className={classes.ClientSubTitle}>Creative Agency</div>

            <div className={classes.Text}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                veniam fuga commodi inventore laudantium sapiente sed aut eaque
                nesciunt perferendis. Nulla reiciendis, velit officia beatae
                molestiae ratione vitae commodi architecto.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                veniam fuga commodi inventore laudantium sapiente sed aut eaque
                nesciunt perferendis. Nulla reiciendis, velit officia beatae
                molestiae ratione vitae commodi architecto.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                veniam fuga commodi inventore laudantium sapiente sed aut eaque
                nesciunt perferendis. Nulla reiciendis, velit officia beatae
                molestiae ratione vitae commodi architecto.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
                veniam fuga commodi inventore laudantium sapiente sed aut eaque
                nesciunt perferendis. Nulla reiciendis, velit officia beatae
                molestiae ratione vitae commodi architecto.
              </p>
            </div>
          </div>

          <div className={classes.Buttons}>
            <Button type="previous">Previous</Button>
            <Button type="next">Next</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProject;
