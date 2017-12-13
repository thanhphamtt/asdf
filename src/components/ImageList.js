import React from 'react';
import ImageComponent from "./Image";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as index from '../actions/index';
class ImageListComponent extends React.Component{

  like(id){
    this.props.index.likeImage(id);
  }

  render(){
    return(
      <div>
        {this.props.images.map((item) => {
          return(
            <ImageComponent like={this.like} image={item}/>);
        })
        }


      </div>
    );

  }
}
function mapStateToProps(state){
  return {
    images: state.image,
  };
}

function mapDispatchtoProps(dispatch){
  return{
    index: bindActionCreators(index,dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchtoProps)(ImageListComponent);
