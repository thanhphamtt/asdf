import initialState from './initialState';
import * as types from '../constants/index';

export default function imageReducers(state = initialState.image, action) {
    switch (action.type){

      case types.ADD_IMAGE : {
        console.log(action.url);
        let data = [...state];
        data = [...data, {
          id : data.length,
          value : action.url,
          liked: false,
        }];
        return data;

      }
      case types.EDIT_IMAGE: {
        console.log (action.url, action.id);
        let data = state.map(image => {
          return image.id === action.id ? {...image, value: action.url, liked : false} : image;
        });
        return data;
      }
      case types.DELETE_IMAGE:
         return state.filter((image) => image.id !== action.id);
      case types.LIKE_IMAGE: {
        let data =state.map(image => {
          return (image.id === action.id) ? {...image, liked: !image.liked} : image;
        });
         return data;

        }

      case types.SET_FILTER:{
        let data = [...state];
        console.log(data);
        if(action.filter === "LIKE") return data.filter((image) => image.liked === true ); else
        if(action.filter === "UNLIKE") return data.filter((image) => image.liked ===false ); else
        return data;
      }

      default:
        return state;
    }

}
