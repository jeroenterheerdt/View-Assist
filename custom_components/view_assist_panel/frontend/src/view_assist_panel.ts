import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import yaml from 'js-yaml';

@customElement('view_assist_panel')
class ViewAssistPanel extends LitElement {
  @property({ type: String }) yamlContent: string = '';
  @property({ type: Object }) parsedContent: any = null;

  static styles = css`
    pre {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 5px;
    }
  `;

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('yamlContent')) {
      try {
        this.parsedContent = yaml.load(this.yamlContent);
      } catch (e) {
        console.error('Error parsing YAML:', e);
      }
    }
  }

  render() {
    return html`
      <div>
        ${this.parsedContent
          ? html`<pre>${JSON.stringify(this.parsedContent, null, 2)}</pre>`
          : html`<div>Loading...</div>`}
      </div>
    `;
  }
}
