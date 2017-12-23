import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as index from '../actions/index';

class FilterImage extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: "ALL",
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({value: event.target.value});
    console.log(this.state.value);
    this.props.index.setFilter(this.state.value);
  }
  render(){
     return(
       <div>
           Filter:
           <select onClick={(e) =>this.handleClick(e)}>
             <option value="ALL">All</option>
             <option value="LIKE">Like</option>
             <option value="UNLIKE">Unlike</option>
           </select>


       </div>
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
export default connect(mapStatetoProps,mapDispatchtoProps)(FilterImage);
