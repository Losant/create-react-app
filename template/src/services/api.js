import axios from 'axios';
import targets from '../targets.json';

export default async function ApiWrapper(
  {
    path, cancelToken, method, data, timeout, params
  }
) {
  const token = sessionStorage.getItem('LOS_EXP_TOKEN');
  const urlBase = targets[process.env.REACT_APP_TARGET].url;
  const url = `${urlBase}${path}`;
  const config = {
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    cancelToken,
    url,
    method,
    timeout,
    data,
    params
  };

  const response = await axios(config);
  if (response) {
    return response;
  }

  throw new Error('Invalid network response');
}

ApiWrapper.defaultProps = {
  timeout: 120000,
  isSaml: false
};
