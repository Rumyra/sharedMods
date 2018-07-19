// screen maths
// height, width, halfs, distribution etc...

class Kit {
	constructor (canvas) {
		this._canvas = canvas;
		this._context = canvas.getContext('2d');

		this.resize();
		window.addEventListener("resize", () => {
			this.resize();
			console.log(this.width);
		}, false)
	}
	// width & height based on window
	get width() { return this._canvas.width }

	init() {

		return {
			width: this.width,
			height: this.height,
			centerX: this.centerX = window.innerWidth/2,
			centerY: this.centerY = window.innerHeight/2,
			pointerX: this.pointerX,
			pointerY: this.pointerY
		}
	}

	resize() {
		this._canvas.width = window.innerWidth;
		this._canvas.height = window.innerHeight;
	}

}

// const kit = screen.init();

export { Kit };