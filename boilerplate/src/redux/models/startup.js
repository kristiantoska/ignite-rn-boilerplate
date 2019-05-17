import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  startup: null,
  startupFinish: null
});

export const StartupTypes = Types;
export default Creators;

const INITIAL_STATE = {
  loading: true
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: state => ({ ...state, loading: true }),
  [Types.STARTUP_FINISH]: state => ({ ...state, loading: false })
});
