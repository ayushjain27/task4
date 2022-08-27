import React from 'react';
import styles from '../Intership/Intership.module.css'

const Courses = () => {
  return (
    <>
    <div className="my-3 mx-2">
    <div className="flex mx-3">
      <h4>Popular Categories</h4>
    </div>
      <div className="d-flex flex-wrap justify-content-center">
        <a className="my-3" href="https://trainings.internshala.com/web-development-course/?utm_source=is_web_IS-home-midsection_web1" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/part_time.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Part Time</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/python-course/?utm_source=is_web_IS-home-midsection_web2" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/engineering.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Engineering</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/machine-learning-course/?utm_source=is_web_IS-home-midsection_web4" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/ngo.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">NGO</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/excel-course/?utm_source=is_web_IS-home-midsection_web5" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/business_mba.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Business/MBA</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/autocad-course/?utm_source=is_web_IS-home-midsection_web6" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/design.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Design</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/data-science-beginner-course/?utm_source=is_web_IS-home-midsection_web7" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/science.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Science</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/c-plus-plus-course/?utm_source=is_web_IS-home-midsection_web8" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/media.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Media</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://trainings.internshala.com/digital-marketing-course/?utm_source=is_web_IS-home-midsection_web3" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/humanities.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Humanities</h5>
          </div>
        </div>
        </a>
      </div>
    </div>
    </>
  )
}

export default Courses
