import axios from 'axios';
import { loginConfig } from '../config';
import { Todo } from '../types/Todo';

const loginUrl = 'http://localhost:5000/login/';
const toDosUrl = 'http://localhost:5000/cards/';
let token = '';
const config = {
  headers: { authorization: `Bearer ${token}` },
};

export const login = async () => {
  try {
    const res = await axios.post(
      loginUrl,
      { login: loginConfig.login, password: loginConfig.password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    token = res.data.token;
    return res.status;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to fetch todo cards data');
  }
};

export const getTodos = async () => {
  try {
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    const res = await axios.get(toDosUrl, config);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to fetch todo cards data');
  }
};

export const postTodo = async (data: Todo) => {
  try {
    const config = {
      headers: { authorization: `Bearer ${token}` },
    };
    const res = await axios.post(loginUrl, data, config);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to fetch todo cards data');
  }
};

export const putTodo = async (data: any) => {
  try {
    const res = await axios.put(`loginUrl${data.id}`, data, config);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to fetch todo cards data');
  }
};

export const deleteTodo = async (data: any) => {
  try {
    const res = await axios.delete(`loginUrl${data}`, config);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error('Unable to fetch todo cards data');
  }
};
