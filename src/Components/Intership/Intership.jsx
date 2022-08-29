import React from "react";
import styles from "./Intership.module.css"

const Intership = () => {
  return (
    <>
    <div className="my-3 mx-2">
    <div className="flex mx-3">
      <h4>Intershala Training: <span class="badge rounded-pill bg-warning text-dark">New</span></h4>
    </div>
      <div className="d-flex flex-wrap justify-content-center">
        <a className="my-3" href="https://trainings.internshala.com/web-development-course/?utm_source=is_web_IS-home-midsection_web1" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/web_development.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Web Development</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/python-course/?utm_source=is_web_IS-home-midsection_web2" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/programming_with_python.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Programming with Python</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/digital-marketing-course/?utm_source=is_web_IS-home-midsection_web3" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/digital_marketing.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Digital Marketing</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/machine-learning-course/?utm_source=is_web_IS-home-midsection_web4" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/machine_learning.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Machine Learning</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/excel-course/?utm_source=is_web_IS-home-midsection_web5" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/advanced_excel.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Advanced Excel</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/autocad-course/?utm_source=is_web_IS-home-midsection_web6" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/autocad.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">AutoCAD</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/data-science-beginner-course/?utm_source=is_web_IS-home-midsection_web7" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/data_science.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Data Science</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/c-plus-plus-course/?utm_source=is_web_IS-home-midsection_web8" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/programming_with_c_and_c++.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Programming with C and C++</h5>
          </div>
        </div>
        </a>
      </div>
    </div>
    </>
  );
};

export default Intership;
