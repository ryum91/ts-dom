class TSDom {
  el!: HTMLElement;

  get name(): string | null {
    return this.el.getAttribute('name');
  }
  set name(val) {
    this.el.setAttribute('name', val || '');
  }
}

export default TSDom;