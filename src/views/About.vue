<template>
  <default-theme>
    <div class="about">
      <h1>This is an about pagasdase</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Item Name</th>
            <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>


      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Dropdown Trigger -->
        <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

        <!-- Dropdown Structure -->
        <ul id='dropdown1' class='dropdown-content'>
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
          <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul>

      </div>
  </default-theme>
</template>

<script>
import DefaultTheme from '@/themes/Default'
export default {
  name: 'about',
  components: {
    DefaultTheme
  }
}
</script>
