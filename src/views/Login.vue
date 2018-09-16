<template>
  <login-theme>
    <main>
    <center>

      <h5 class="indigo-text login__title">Please, login into your account</h5>

      <div class="container">
        <div class="row">

          <form class="col s6 z-depth-1 grey lighten-4 offset-s3" method="get" action="/" novalidate>
            <div class="login__form">

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' name='email' id='email' />
                  <label for='email'>Enter your email</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' />
                  <label for='password'>Enter your password</label>
                </div>
                <label style='float: right;'>
                  <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                </label>
              </div>

              <br />
              <center>
                <div class='row'>
                  <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
                </div>
              </center>

            </div>

          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>
  </main>
  </login-theme>
</template>

<script>
import LoginTheme from '@/themes/Login'

export default {
  name: 'login',
  components: {
    LoginTheme
  }
}
</script>

<style media="screen">
.login__title {
  margin: 40px 0;
}

.login__form {
  padding: 20px;
  width: 100%;
  display: inline-block;
}
</style>
