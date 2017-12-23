import React from 'react';
import ImageListComponent from "../components/ImageList";
import AddComponent from "../components/Add";

class AddImage extends React.Component{

    render(){
      return(
        <div>
         <AddComponent />
         <ImageListComponent/>
        </div>

      );
    }

}

export default (AddImage);




