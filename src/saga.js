import { takeEvery, fork } from 'redux-saga';
import handleCompaniesActions from './companies/companiesSaga';

export default function* rootSaga() {
  yield takeEvery('*', sagaRouter);
}

function* sagaRouter(action) {
  yield fork(sagaForResource[getResourceFromType(action)]);
}

function getResourceFromType(action) {
  return action.type.slice(0, action.type.indexOf('_'));
}

const sagaForResource = {
  COMPANIES: handleCompaniesActions
};
