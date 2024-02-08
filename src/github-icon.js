/*

  Custom HTML Elements

  For More information go to: https://lnsy.dev/blog/custom-html-components.html

 */

import github_dark_icon from './github-dark-icon.js';
import github_light_icon from './github-light-icon.js';

class GithubIcon extends HTMLElement {
  connectedCallback(){
    const href = this.getAttribute('href');
    if(href === null){
      console.error('github-icon requires an href attribute');
      return 
    } 
    
    const is_light = this.hasAttribute('light');
    if(is_light){
      this.renderIcon(href, github_light_icon);
    } else {
      this.renderIcon(href, github_dark_icon);
    }
  }

  renderIcon(href, icon){
    this.innerHTML = `<a href="${href}" target="_blank">${icon}</a>`
  }

}

customElements.define('github-icon', GithubIcon)