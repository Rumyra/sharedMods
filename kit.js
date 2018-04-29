// screen maths
// height, width, halfs, distribution etc...

var Kit = {
	// width & height based on window
	init() {
		this.resize();
		window.addEventListener("resize", (e) => Kit.resize(e), false);

		this.pointerX = window.innerWidth/2;
		window.addEventListener("mousemove", (e) => Kit.pointerMove(e), false);

		return {
			width: this.width,
			height: this.height,
			centerX: this.centerX = window.innerWidth/2,
			centerY: this.centerY = window.innerHeight/2,
			pointerX: this.pointerX,
			pointerY: this.pointerY
		}
	},
	resize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	},
	pointerMove(ev) {
		// console.log(ev.clientX);
		this.pointerX = ev.clientX;
		this.pointerY = ev.clientY;
	}
}

// const kit = screen.init();

export { Kit };