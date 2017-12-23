import * as types from '../constants/index';

export function addImage(value) {
  console.log("addImage");
  return ({
    type: types.ADD_IMAGE,
    url: value
  });
}
export function likeImage(id){
  console.log("likeImage");

  return ({
    type: types.LIKE_IMAGE,
    id
  });
}
export function editImage(value,id){
  console.log("editImage");

  return ({
    type: types.EDIT_IMAGE,
    url :value,
    id
  });
}
export function deleteImage(id){
  console.log("deleteImage");

  return ({
    type : types.DELETE_IMAGE,
    id
  });
}
export function setFilter(filter){
  console.log("setFilter");

  return ({
    type : types.SET_FILTER,
    filter
  });
}
