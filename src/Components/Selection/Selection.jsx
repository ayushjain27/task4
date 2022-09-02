import React from 'react';
import styles from './Selection.module.css';

const Selection = () => {
  return (
    <>
        <div className="container">
            <h3 className=''>Selected Students</h3>
            <div className="row h-100 my-3" style={{height: '300px'}}>
                <div className="col-md-3 my-3 position-relative">
                    <img className={`${styles.card} w-100 h-100`} src="./Images/download (1).jpeg" alt="" />
                    <p className={`${styles.text} position-absolute bottom-0 left-0 p-3 me-4 text-white fw-bold`}>Avinash Singh in Amazon with <span style={{color: 'yellow'}}>15000</span> stipend</p>
                </div>
                <div className="col-md-3 my-3 position-relative">
                    <img className={`${styles.card} w-100 h-100`} src="./Images/download.jpeg" alt="" />
                    <p className={`${styles.text} position-absolute bottom-0 left-0 p-3 me-4 text-white fw-bold`}>Sudha Bansal in Google with <span style={{color: 'yellow'}}>25000</span> stipend</p>
                </div>
                <div className="col-md-3 my-3 position-relative">
                    <img className={`${styles.card} w-100 h-100`} src="./Images/images.jpeg" alt="" />
                    <p className={`${styles.text} position-absolute bottom-0 left-0 p-3 me-4 text-white fw-bold`}>Anmol Sharma in Flipkart with <span style={{color: 'yellow'}}>12000</span> stipend</p>
                </div>
                <div className="col-md-3 my-3 position-relative">
                    <img className={`${styles.card} w-100 h-100`} src="./Images/download (2).jpeg" alt="" />
                    <p className={`${styles.text} position-absolute bottom-0 left-0 p-3 me-4 text-white fw-bold`}>Riya jain in Microsoft with <span style={{color: 'yellow'}}>10000</span> stipend</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Selection
