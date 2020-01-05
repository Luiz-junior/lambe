import { ADD_POST, ADD_COMMENT } from './actionTypes';

export const addPost = post => {
  console.log('post', post)
  return {
    type: ADD_POST,
    payload: post
  };
};

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload: payload,
  }
};