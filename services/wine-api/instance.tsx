import axios from 'axios';

export default axios.create({
  baseURL: "https://wine-back-test.herokuapp.com/products"
});