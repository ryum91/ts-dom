import TSDom from './ts-dom';

class TSInputDom extends TSDom {
  el!: HTMLInputElement;

  value(): string {
    return this.el.value;
  }
}

export default TSInputDom;