import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as index from '../actions/index';
// import FilterImage from './FilterImage'
import AddImage from '../containers/AddImage'
class ImageApp extends Component{


  render(){
    return(
      <AddImage />
      //<FilterImage />
    );
  }
}
export default ImageApp
