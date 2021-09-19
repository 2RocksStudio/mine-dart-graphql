import { ResponseStatus } from './response.status';

export class ResponceCode {
  public static readonly STATUS_1000_SUCCESS = new ResponseStatus(
    1000,
    'Success',
    'Success',
  );

  public static readonly STATUS_2001_USER_USERNAME_ALREADY_EXIST =
    new ResponseStatus(2001, 'User create fail', 'Username already exist!');
  //   public static readonly STATUS_4008_FORGET_PASSWORD_USER_NOT_FOUND =
  //   new ResponseStatus(
  //     4008,
  //     'Forget Password user not found',
  //     'this email is not registered',
  //   );

  //   public static readonly STATUS_4008_FORGET_PASSWORD_USER_NOT_FOUND =
  //     new ResponseStatus(
  //       4008,
  //       'Forget Password user not found',
  //       'this email is not registered',
  //     );
}
