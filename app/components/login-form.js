import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {

  /**
   * 
   * @param {Event & {target: HTMLFormEvent}} evt 
   */
  @action
  onLoginFormSubmit(evt){
    evt.preventDefault();
    transitionTo('/user')
  }
};