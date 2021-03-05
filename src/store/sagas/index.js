import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from './../actions/actionTypes';
import { fetchCharactersSaga, searchCharactersSaga, applyFilterSaga } from './charactersSaga';

export function* watchSagas() {
    //Run all the sagas parallely, if ever occured at once
    yield all([
        takeEvery(actionTypes.FETCH_CHARACTERS_INITIATE, fetchCharactersSaga),
        takeEvery(actionTypes.SEARCH_CHARACTERS_INITIATE, searchCharactersSaga),
        takeEvery(actionTypes.APPLY_FILTERS_INITIATE, applyFilterSaga)
    ])
    //Run all the sagas one after the other in order
    // yield takeEvery(actionTypes.FETCH_CHARACTERS_INITIATE, fetchCharactersSaga);
    // yield takeEvery(actionTypes.SEARCH_CHARACTERS_INITIATE, searchCharactersSaga);
    // yield takeEvery(actionTypes.APPLY_FILTERS_INITIATE, applyFilterSaga);
}