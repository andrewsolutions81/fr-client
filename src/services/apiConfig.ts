export let DINAMIC_BASE_URL: string | undefined;
if (process.env.REACT_APP_PRODUCTION_SERVER !== undefined) {
  DINAMIC_BASE_URL = process.env.REACT_APP_PRODUCTION_SERVER;
} else {
  DINAMIC_BASE_URL = process.env.REACT_APP_DEVELOPMENT_SERVER;
}

const BASE_URL = process.env.REACT_APP_DEVELOPMENT_SERVER

export default BASE_URL
