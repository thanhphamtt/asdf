import React from 'react';

class ImageComponent extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      pp : false,
      url : ""
    };
  }

  render(){
    return (
      <div>
        <div>
        <img style ={{width:"200px", height:"200px"}} src={ this.props.image.value} />
        </div>
        <button onClick={()=>this.props.like(this.props.image.id)}
           style={ {
             color: this.props.image.liked ? 'blue' : 'black'
           }}
        >
          Like
        </button>
        <button onClick={()=>this.props.delete(this.props.image.id)}
        >

          Delete
        </button>

        <button onClick={()=>this.setState(prevState => ({
          pp: !prevState.pp
        }))}>
          Edit
        </button>
        <div style={{display : this.state.pp ? '': 'none' }} >
        <form onSubmit={e => {
          e.preventDefault();
          if(this.state.url.trim() != "") this.props.edit(this.state.url,this.props.image.id);
        }
        }
        >
          <input type="type" value={this.state.url}
                 onChange={(e)=>{ this.setState({url: e.target.value});}}/>
          <button type="submit">
            Save
          </button>
        </form>
      </div>
      </div>
    );
  }


}

export default ImageComponent;
