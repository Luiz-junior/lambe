import { ADD_POST } from '../actions/actionTypes';

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
      return { ...state, posts: state.posts.concat({ ...action.payload})};
    default:
      return state;
  }
};

export default reducer;

