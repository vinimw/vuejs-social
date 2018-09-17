<template>
  <default-theme>
    <div class="profile">
      <div class="row">
        <div class="col s5">
          <div class="card">
            <div class="card-image">
              <img src="https://dummyimage.com/1000x500/000/fff.jpg">
            </div>
          </div>
        </div>

        <div class="col s7">
          <div class="row">
            <form class="col s12 z-depth-1 grey lighten-4 form" v-on:submit.prevent="updateProfile()" novalidate>
              <div class="login__form">

                <div class='row'>
                  <div class='input-field col s12'>
                    <input class='validate' type='text' name='name' id='name' v-on:keyup="resetField('name')" v-model="user.name" v-bind:class="{ 'invalid': validation.user.name }" />
                    <label v-bind:class="{ 'active': user.name }" for='name'>Enter your name</label>
                    <span class="helper-text" v-bind:class="{ 'active': validation.user.name }">{{ validation.user.nameText }}</span>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input class='validate' type='email' name='email' id='email' v-on:keyup="resetField('email')" v-model="user.email" v-bind:class="{ 'invalid': validation.user.email }" />
                    <label for='email' v-bind:class="{ 'active': user.email }">Enter your email</label>
                    <span class="helper-text" v-bind:class="{ 'active': validation.user.email }">{{ validation.user.emailText }}</span>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input class='validate' type='password' name='password' id='password' v-on:keyup="resetField('password')" v-model="user.password" v-bind:class="{ 'invalid': validation.user.password }" />
                    <label for='password'>Enter your password</label>
                    <span class="helper-text" v-bind:class="{ 'active': validation.user.password }">{{ validation.user.passwordText }}</span>
                  </div>
                </div>

                <div class='row'>
                  <div class='input-field col s12'>
                    <input class='validate' type='password' name='password_confirmation' id='password_confirmation' v-on:keyup="resetField('password_confirmation')" v-model="user.password_confirmation" v-bind:class="{ 'invalid': validation.user.password_confirmation }" />
                    <label for='password_confirmation'>Reenter your password</label>
                    <span class="helper-text" v-bind:class="{ 'active': validation.user.password_confirmation }">{{ validation.user.password_confirmationText }}</span>
                  </div>
                </div>

                <div class="row">
                  <div class='input-field col s12'>
                    <div class="file-field input-field">
                      <div class="btn">
                        <span>File</span>
                        <input type="file">
                      </div>
                      <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                      </div>
                    </div>
                  </div>

                </div>

                <br />
                <center>
                  <div class='row'>
                    <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Submit</button>
                  </div>
                </center>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </default-theme>
</template>

<script>
import DefaultTheme from '@/themes/Profile'
import Axios from 'axios'


export default {
  name: 'profile',
  components: {
    DefaultTheme
  },
  created () {
    this.verifyUserLogged();
  },
  data () {
    return {
      validation: {
        user: {
          emailText: '',
          email: false,
          passwordText: '',
          password: false,
          nameText: '',
          name: false,
          password_confirmationText: '',
          password_confirmation: false
        }
      },
      user: {
        name: '',
        email: '',
        password: '',
        token: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    resetField (field) {
      // field = 'lala';
      if (this.user[field]) {
          if (this.validation.user[field]) {
            this.validation.user[field] = false;
            this.validation.user[field + 'Text'] = '';
          }

      }
    },
    verifyUserLogged () {
      if (sessionStorage.getItem('user')) {
        let getSessionUser = JSON.parse(sessionStorage.getItem('user'));
        this.user.name = getSessionUser.name;
        this.user.email = getSessionUser.email;
        this.user.token = getSessionUser.token;
      }
    },
    updateProfile () {
      this.validation.user.email = false;
      this.validation.user.emailText = '';
      this.validation.user.password = false;
      this.validation.user.passwordText = '';
      this.validation.user.name = false;
      this.validation.user.nameText = '';
      this.validation.user.password_confirmation = false;
      this.validation.user.password_confirmationText = '';

      Axios.put('http://127.0.0.1:8000/api/profile', {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation,
      },
      {
        "headers": {
          "authorization": "Bearer " + this.user.token
        }
      })
      .then(response => {
        // eslint-disable-next-line
        // console.log(response.data);
        if (response.data) {
          // eslint-disable-next-line
          console.log(response.data);
          // sessionStorage.setItem('user',JSON.stringify(response.data));
          // this.$router.push('/');
        } else if (response.data.error){
          // eslint-disable-next-line
          console.log('error');
        } else {
          for (let [key, value] of Object.entries(response.data)) {
            if (key == 'email') {
              this.validation.user.email = true;
              this.validation.user.emailText = value[0];
            }

            if (key == 'password') {
              this.validation.user.password = true;
              this.validation.user.passwordText = value[0];
            }

            if (key == 'name') {
              this.validation.user.name = true;
              this.validation.user.nameText = value[0];
            }

            if (key == 'password_confirmation') {
              this.validation.user.password_confirmation = true;
              this.validation.user.password_confirmationText = value[0];
            }
          }
        }
      })
      .catch(e => {
        // eslint-disable-next-line
        // console.log(e);
        alert(e);
      });
      return false;
    }
  }
}
</script>

<style media="screen">
.form {
  margin-top: 20px;
}
.login__title {
  margin: 40px 0;
}

.login__form {
  padding: 20px;
  width: 100%;
  display: inline-block;
}
.helper-text {
  text-align: left;
}
.input-field {
  margin: 0;
}
</style>
