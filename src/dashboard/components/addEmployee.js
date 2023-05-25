import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./navBar";
import { Fragment } from "react";
import styles from "./addEmployee.module.scss";
import AddIcon from "@mui/icons-material/Add";

export default function AddEmployee() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.createObjectURL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  const title = "add";

  return (
    <Fragment>
      <NavBar name={title} />
      {/* ADD OR REMOVE FUNCTION */}
      <div className={styles.addContainer}>
        <div className={styles.add_text}>
          <h3>Add</h3>
          <h3>Remove</h3>
        </div>
      </div>

      {/* main form */}

      <div className={styles.form_container}>
        <form className={styles.form}>
          <div className={styles.employee_img}>
            <div
              className={styles.employee_img_container}
              onClick={() => document.querySelector(".teeth").click()}
            >
              <input
                // className={styles.img_upload}
                className="teeth"
                type="file"
                // multiple
                // accept="image/*"
                onChange={onImageChange}
                hidden
              />
              <AddIcon className={styles.add_icon} />

              {imageURLs.map((imageSrc) => (
                <img src={imageSrc} className={styles.profile_img} />
              ))}
            </div>
            <h3>Employee Profile</h3>
          </div>
          {/* 
INFORMATION GRID */}

          <div className={styles.info_grid}>
            <label className={styles.label}>
              First Name <input type="text" placeholder="First Name" />
            </label>

            <label className={styles.label}>
              Last Name
              <input type="text" placeholder="Last Name" />
            </label>

            <label className={styles.label}>
              Job Role <input type="text" placeholder="e.g Private Limited" />
            </label>

            <label className={styles.label}>
              E-mail
              <input type="text" placeholder="Email@gmail.com" />
            </label>

            <label className={styles.label}>
              Mobile Number <input type="number" placeholder="+234" />
            </label>

            <label className={styles.label}>
              wallet Address
              <input type="number" placeholder="number" />
            </label>

            <label className={styles.label}>
              Salary
              <input type="number" placeholder="$ Amount" />
            </label>
          </div>
          <div className={styles.button}>
            <button type="submit" className={styles.button1}>
              ADD
            </button>
            <button type="submit" className={styles.button2}>
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
