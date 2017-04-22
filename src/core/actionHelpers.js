export function actionCreator(type) {
  if (typeof type !== 'string') {
    throw new TypeError(`Invalid type provided to actionCreator: ${type}`);
  }

  return function (payload) {
    return { type, payload };
  };
}

export function success(type) {
  return `${type}_SUCCESS`;
}

export function failure(type) {
  return `${type}_FAILURE`;
}

export function actionCreatorSet(type) {
  return [
    actionCreator(type),
    actionCreator(success(type)),
    actionCreator(failure(type))
  ];
}
