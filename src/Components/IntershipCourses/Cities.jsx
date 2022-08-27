import React from 'react';
import styles from '../Intership/Intership.module.css'

const Cities = () => {
  return (
    <>
    <div className="my-3 mx-2">
    <div className="flex mx-3">
      <h4>Popular Cities</h4>
    </div>
      <div className="d-flex flex-wrap justify-content-center">
        <a className="my-3" href="https://internshala.com/jobs/work-from-home/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/work_from_home.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Work from home</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/internship-in-delhi%20ncr/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/delhi_ncr.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Delhi/NCR</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/internship-in-bangalore/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/bangalore.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Bangalore</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/internship-in-mumbai/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/mumbai.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Mumbai</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/internship-in-hyderabad/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/hyderabad.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Hyderabad</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/internship-in-chennai/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/chennai.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">Chennai</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/internship-in-kolkata/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/kolkata.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">KolKata</h5>
          </div>
        </div>
        </a>
        <a className="my-3" href="https://internshala.com/internships/international-internship/" target="_blank"  rel="noreferrer">
        <div className={`${styles.card} card`} style={{ width: "160px" }}>
          <img src="./Images/international.svg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="text-center">International</h5>
          </div>
        </div>
        </a>
      </div>
    </div>
    </>
  )
}

export default Cities
