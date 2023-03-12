import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "./types";
import axios from 'axios'

const fetchCommentsSuccess = (comments) => {
  return {
    type : FETCH_COMMENTS_SUCCESS,
    payload : comments
  }
}
const fetchCommentsFailure = (err) => {
  return {
    type : FETCH_COMMENTS_FAILURE,
    payload : err
  }
}
const fetchCommentsRequest = () => {
  return {
    type : FETCH_COMMENTS_REQUEST
  }
}

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest())
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(comments=>
      dispatch(fetchCommentsSuccess(comments)))
    .catch(err => dispatch(fetchCommentsFailure(err)))
    // axios("https://jsonplaceholder.typicode.com/comments")
    // .then(comments=>console.log("comments",comments))
    // .catch(err => console.log(err))

  }
}