import React from 'react';

class ImageComponent extends React.Component{

  constructor(props, context) {
    super(props, context);
  }

  render(){
    return (
      <div>
        <image scr={ this.props.image.value} > </image>
        <button onClick={()=>this.props.like(this.props.image.id)}
           style={ {
             color: this.props.image.liked ? 'blue' : 'black'
           }}
        >
          Like
        </button>
      </div>
    );
  }


}

export default ImageComponent;
