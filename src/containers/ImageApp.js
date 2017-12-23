import React, { Component } from 'react';
import AddImage from '../containers/AddImage';
import FilterImage from '../containers/FilterImage';

class ImageApp extends Component{


  render(){
    return(
      <div>
      <FilterImage/>
      <AddImage />
      </div>
      //
    );
  }
}
export default ImageApp
