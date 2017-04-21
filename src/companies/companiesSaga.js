import { fork, call, put } from 'redux-saga/effects';
import { COMPANIES_GET_ALL } from './companiesActionTypes';
import * as companiesActions from './companiesActions';
import * as companiesService from './companiesService';

export default function* handleCompaniesActions(action) {
  const { type } = action;
  switch (type) {
    case COMPANIES_GET_ALL:
      yield fork(getAll);
      break;
    default:
      break;
  }
}

function* getAll() {
  try {
    const companies = yield call(companiesService.getAll);
    yield put(companiesActions.getAllSuccess(companies));
  } catch (err) {
    throw err;
    // FIXME better error handling
  }
}
