import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as index from '../actions/index';
class AddComponent extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.add = this.add.bind(this);
    this.state = {
      url: "",
    };
  }

  add(value){
    this.props.index.addImage(value);
  }
  render(){
    return (
      <form onSubmit={e => {
        e.preventDefault();
        if(this.state.url.trim() != "") this.add(this.state.url);
      }
      }
      >
        <input type="type" value={this.state.url}
               onChange={(e)=>{ this.setState({url: e.target.value});}}/>
        <button type="submit">
          ADD
        </button>
      </form>

    );
  }
}

function mapStatetoProps(){

}
function mapDispatchtoProps(dispatch) {
  return {
    index: bindActionCreators(index, dispatch)
  };
}
export default connect(mapStatetoProps,mapDispatchtoProps)(AddComponent);
