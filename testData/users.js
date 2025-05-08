// Consider adding expected outcomes to your test data
module.exports = [
    {
      username: 'standard_user',
      password: 'secret_sauce',
      expectedUrl: 'https://www.saucedemo.com/inventory.html',
      shouldLogin: true
    },
    {
      username: 'locked_out_user',
      password: 'secret_sauce',
      expectedUrl: 'https://www.saucedemo.com/',
      shouldLogin: false,
      errorMessage: 'Epic sadface: Sorry, this user has been locked out.'
    }
  ];