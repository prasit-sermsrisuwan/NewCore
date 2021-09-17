import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private color: string = "";
  private mode: string = "";
  private theme: string = "";

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.theme);
  }

  updateTheme(vMode: string, vColor: string) {
    this.getColorTheme();
    var previousTheme = this.theme;
    this.renderer.removeClass(document.body, previousTheme);
    this.setColorTheme(vColor, vMode);
    this.getColorTheme();
    this.renderer.addClass(document.body, this.theme);
  }

  isDarkMode() {
    return this.mode === 'dark';
  }

  private setColorTheme(vColor: string, vMode: string) {
    this.color = vColor;
    this.mode = vMode;
    localStorage.setItem('theme-color', vColor);
    localStorage.setItem('theme-mode', vMode);
  }

  private getColorTheme() {
    var vColor = localStorage.getItem('theme-color');
    var vMode = localStorage.getItem('theme-mode');

    if (vColor) this.color = vColor;
    else this.color = "blue";

    if (vMode) this.mode = vMode;
    else this.mode = "light";

    this.theme = this.mode + "-" + this.color + "-mode";
  }
}
