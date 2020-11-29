export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.tokens) {
      return { Authorization: 'Bearer ' + user.tokens };
    } else {
      return {};
    }
  }
  