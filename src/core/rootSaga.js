import { takeEvery, call } from 'redux-saga/effects';
import handleCompaniesActions from '../companies/companiesSaga';

export default function* rootSaga() {
  yield takeEvery('*', sagaRouter);
}

function* sagaRouter(action) {
  const resource = getResourceFromType(action);
  switch (resource) {
    case 'COMPANIES':
      yield call(handleCompaniesActions);
      break;
    default:
      break;
  }
}

function getResourceFromType(action) {
  return action.type.slice(0, action.type.indexOf('_'));
}
