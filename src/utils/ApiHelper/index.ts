import axios from 'axios';

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
    result = await axios.get(url, {
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
