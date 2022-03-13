import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  /**
   *
   * @param {Event & {target: HTMLFormEvent}} evt
   */
  @action
  onLoginFormSubmit(evt) {
    evt.preventDefault();
    console.log('submit button clicked');
    window.location = '/user';
  }
}
