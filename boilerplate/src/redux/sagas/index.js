import { takeEvery, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from 'models/startup';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';

/* ------------- API ------------- */

// const api = useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // STARTUP
    takeLatest(StartupTypes.STARTUP, startup)
  ]);
}
