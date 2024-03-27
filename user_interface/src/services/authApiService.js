import axios from 'axios';

const loginUser = async (params) => {
  try {
    const response = await axios.post('http://localhost:3001/login', params);
    return response;
  } catch (error) {
    throw new Error(error.message);
}
};

export default loginUser;

