import initialState from './initialState';
import * as types from '../constants/index';

export default function images(state = initialState, action) {
    switch (action.type){
      case types.ADD_IMAGE :
         return [{
            id: (state.length === 0) ? 0 : state[0].id+1,
            liked :false,
            value : action.value
         }];
      case types.EDIT_IMAGE:
         return state.map((image) => image.id === action.id ? { ...image, value: action.value } : image);
      case types.DELETE_IMAGE:
         return state.filter((image) => image.id !== action.id);
      case types.LIKE_IMAGE:
        return state.map((image) => image.id === action.id ? { ...image, liked: !image.liked } : image);
      case types.SET_FILTER:{
        if(action.filter === "LIKED") return state.filter((image) => image.liked ); else
        if(action.filter === "UNLIKED") return state.filter((image) => !image.liked ); else
        return state;
      }

      default:
        return state;
    }

}
