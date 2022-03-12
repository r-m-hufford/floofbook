import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  animationState;
  animationMessage;

  constructor() {
    super(...arguments)
    this.animationState = 'none';
    this.animationMessage = 'Password does not match';
  }


}
