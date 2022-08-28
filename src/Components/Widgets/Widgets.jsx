import React from 'react';
import WidgetsContent from './WidgetsContent';

const Widgets = () => {
  return (
    <>
        <WidgetsContent heading="Twitter" category="twitter"/>
        <WidgetsContent heading="Sports" category="sports"/>
        <WidgetsContent heading="Entertainment" category="entertainment"/>
        <WidgetsContent heading="Business" category="business"/>
        <WidgetsContent heading="Technology" category="technology"/>
        <WidgetsContent heading="Health" category="health"/>
    </>
  )
}

export default Widgets
