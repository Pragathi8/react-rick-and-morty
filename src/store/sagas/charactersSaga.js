import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from "../../axios-orders";

export function* fetchCharactersSaga(action) {
    yield put(actions.fetchCharactersStart());
    try {
        const res = yield axios.get("/character");
        yield put(actions.fetchCharactersSuccess(res.data.results));
        yield put(actions.extractSpecies());
        yield put(actions.extractGenders());
        yield put(actions.extractTypes());
        yield put(actions.extractStatus());
    } catch (error) {
        yield put(actions.fetchCharactersFail(error))
    }
}

export function* searchCharactersSaga(action) {
    yield put(actions.seacrhCharactersStart(action.value));
    try {
        const res = yield axios.get(`/character/?name=${action.value}`);
        yield put(actions.seacrhCharactersSuccess(res.data.results));
    }
    catch (error) {
        yield put(actions.seacrhCharactersFail(error));
    }
}

export function* applyFilterSaga(action) {
    yield put(actions.applyFilterStart());
    const searchParams = new URLSearchParams();
    for (const key of Object.keys(action.filters)) {
        const param = action.filters[key];
        if (Array.isArray(param)) {
            for (const p of param) {
                searchParams.append(key, p);
            }
        } else {
            searchParams.append(key, param);
        }
    }
    try {
        const res = yield axios.get("/character/", {
            params: searchParams
        })
        yield put(actions.applyFilterSuccess(res.data.results));
    }
    catch (error) {
        yield put(actions.applyFilterFail(error))
    }
}