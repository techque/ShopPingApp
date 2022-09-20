export const initialLogin = {
  login: false,
  fname: '',
  lname: ''
};

export const LoginReducer = (login, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        login: action.payload.login,
        fname: action.payload.fname,
        lname: action.payload.lname
      };

    case 'LOGOUT': 
      return {
        login: action.payload.login,
        fname: action.payload.fname,
        lname: action.payload.lname
      };
  
    default:
      throw new Error('Invalid login action type!');
  }

};