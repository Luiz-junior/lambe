import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes';

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'Luiz Junior',
    email: 'luizjunior@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: [{
      nickname: 'John Ray',
      comment: 'Stunning!'
    }, {
      nickname: 'Ana Julia',
      comment: 'Foto Linda, onde foi tirada?'
    }]
  }, {
    id: Math.random(),
    nickname: 'Danilo Fit',
    email: 'danilofit@gmail.com',
    image: require('../../../assets/imgs/bw.jpg'),
    comments: [],
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      console.log('posts', initialState.posts);
      return { ...state, posts: state.posts.concat({ ...action.payload }) };
    case ADD_COMMENT:
      return {
        ...state, posts: state.posts.map(post => {
          if (post.id === action.payload.postId) {
            if (post.comments) {
              post.comments = post.comments.concat(action.payload.comment);
            } else {
              post.comments = [action.payload.comment]
            };
          };

          return post;
        })
      };
    default:
      return state;
  }
};

export default reducer;

