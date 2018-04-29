// THIS DOESN'T WORK YET :D
// return an initiation & measurements of canvas itself
const canvas = {
	init() {
		this.elem = document.querySelector('canvas');
		this.resize();
		window.addEventListener("resize", () => canvas.resize(), false);
		return {
			width: this.elem.width = this.elem.offsetWidth,
			height: this.elem.height = this.elem.offsetHeight;
		}
		return this.elem.getContext("2d", { alpha: false });
	},
	resize() {
		this.width = this.elem.width = this.elem.offsetWidth;
		this.height = this.elem.height = this.elem.offsetHeight;
	}
}
const ctx = canvas.init();