import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class LoginFormComponent extends Component {
  @service security;

  /**
   *
   * @param {Event & {target: HTMLFormEvent}} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    console.log('submit button clicked');
    // @ts-ignore
    // window.location = '/user';
    let users = this.security.sendRequest('users');
    console.log('users: ', users);
  }
}
