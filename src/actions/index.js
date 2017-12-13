import * as types from '../constants/index';

export function addImage(value) {
  return ({
    type: types.ADD_IMAGE,
    value
  });
}
export function likeImage(id){
  return ({
    type: types.LIKE_IMAGE,
    id
  });
}
export function editImage(value,id){
  return ({
    type: types.EDIT_IMAGE,
    value,
    id
  });
}
export function deleteImage(id){
  return ({
    type : types.DELETE_IMAGE,
    id
  });
}
export function setFilter(filter = "ALL"){
  return ({
    type : types.SET_FILTER,
    filter
  });
}
