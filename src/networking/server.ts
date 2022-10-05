import Axios from './adaptor';

class Server {
  static fetchUser(token: string) {
    return Axios.get('/users/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static verifyPayment(data: {token: string; id: number}, token: string) {
    return Axios.post(
      '/payment/verify_payment',
      {
        reference: data.token,
        userId: data.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  static async signInUser(data: {email: string; password: string}) {
    const {email, password} = data;
    return Axios.post(
      '/auth/login',
      {
        email,
        password,
      },
    );
  }
  static registerUser(data: {name: string; email: string; password: string}) {
    const {name, email, password} = data;
    return Axios.post('/auth/register', {
      name,
      email,
      password,
    });
  }
  static fetchUserInfo(
    token: string,
  ): Promise<{data: {success: boolean; data: any}}> {
    return Axios.get('/profile/transactions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static updateProfile(data: any, token: string) {
    return Axios.put(
      '/profile/update',
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  static updateImage(uri: string, name: string, token: string) {
    return Axios.put(
      '/profile/update-image',
      {
        uri,
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  static fetchAccounts(token: string) {
    return Axios.get('/profile/accounts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static generateQRCode(
    token: string,
    payload: {amount: number; currency: string},
  ) {
    return Axios.post(
      '/profile/generate-qrc',
      {
        amount: payload.amount,
        currency: payload.currency,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  static verifyAccount(token: string) {
    return Axios.post(
      '/auth/verify_account',
      {
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  static passwordUpdateRequest(email: string) {
    return Axios.post('/auth/password_request', {
      email,
    });
  }
  static updatePassword(password: string, token: string) {
    return Axios.put('/auth/update_password', {
      password,
      token,
    });
  }
}

export default Server;
