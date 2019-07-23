import { takeLatest, all } from 'redux-saga/effects';

/* ------------- Types ------------- */

import { StartupTypes } from './startup';

/* ------------- Sagas ------------- */

import { startup } from './startup/sagas';

/* ------------- API ------------- */

// const api = useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // STARTUP
    takeLatest(StartupTypes.STARTUP, startup)
  ]);
}
