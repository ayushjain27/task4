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
        <a className="my-3" href="https://internshala.com/internships/part-time-jobs/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/part_time.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Part Time</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/engineering-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/engineering.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Engineering</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/ngo-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/ngo.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">NGO</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/mba-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/business_mba.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Business/MBA</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/graphic-design-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/design.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Design</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/science-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/science.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Science</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/media-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
          <img src="./Images/media.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Media</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/humanities-internship/" target="_blank" rel="noreferrer">
        <div className={`${styles.card} card`}>
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
