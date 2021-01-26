import axios from 'axios';

// The practice of 12 Factors would need this to be place in the ENV file
const BASE_URL = 'https://ansible-template-engine.herokuapp.com';

export class ApiError extends Error {
  errorMessage: string;

  constructor(message: string) {
    super(message);
    this.errorMessage = message;
  }
}

const getCommonHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

// API - GET Method
const get = async (url: string) => {
  let result;

  try {
    result = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        ...getCommonHeaders,
      },
    });
  } catch (error) {
    throw new ApiError(error);
  }

  return result;
};

export default {
  get,
};
