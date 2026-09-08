/*

  Custom HTML Elements

  For More information go to: https://lnsy.dev/blog/custom-html-components.html

 */

import github_dark_icon from './github-dark-icon.js';
import github_light_icon from './github-light-icon.js';
import github_system_icon from './github-system-icon.js';

class GithubIcon extends HTMLElement {
  connectedCallback(){
    const href = this.getAttribute('href');
    if(href === null){
      console.error('github-icon requires an href attribute');
      return 
    } 
    
    if(this.hasAttribute('light')){
      this.renderIcon(href, github_light_icon);
    } else if(this.hasAttribute('dark')){
      this.renderIcon(href, github_dark_icon);
    } else {
      this.renderIcon(href, github_system_icon);
    }
  }

  renderIcon(href, icon){
    this.innerHTML = `<a href="${href}" target="_blank">${icon}</a>`
  }

}

customElements.define('github-icon', GithubIcon)