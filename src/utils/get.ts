import _get from 'lodash/get';
export default (obj: object | unknown, path: string = '', fallback?: any) =>
  _get(obj, path, fallback);
