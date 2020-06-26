import {createRPCReducer} from 'fusion-plugin-rpc-redux-react';
export default createRPCReducer('greet', {
  start: (state, action) => ({...state, loading: true}),
  success: (state, action) => ({...state, loading: false, greeting: action.payload.greeting}),
  failure: (state, action) => ({...state, loading: false, error: action.payload.error}),
});