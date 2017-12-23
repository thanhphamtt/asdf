import React from 'react';
import ImageComponent from "./Image";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as index from '../actions/index';

class ImageListComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.like = this.like.bind(this);
    this.delete = this.delete.bind(this);
    this.edit =this.edit.bind(this);
  }

  like(id) {
    this.props.index.likeImage(id);
  }
  delete(id){
    this.props.index.deleteImage(id);
  }
  edit(value,id){
    this.props.index.editImage(value,id);
  }

  render() {

    return (
      <div>
        {
          this.props.images.map((item, index) => {
            return (
              <ImageComponent key={index} like={this.like} image={item} delete={this.delete} edit={this.edit}/>);
          })
        }
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    index: bindActionCreators(index, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(ImageListComponent);

