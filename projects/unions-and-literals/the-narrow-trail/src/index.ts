export function runCommands() {
	let availableResource: undefined | "food" | "water";
	let food: number = 5;
	let water: number = 5;

	for (let i = 1; i <= 7; i++) {
		const randomNumber = Math.floor(Math.random() * 6) + 1;

		let command: "finish" | "food" | "water" | number;

		switch (randomNumber) {
			case 1:
				command = "food";
				break;
			case 2:
				command = "water";
				break;
			default:
				command = randomNumber;
				break;
		}

		if (typeof command === "number") {
			switch (availableResource) {
				case "food":
					food += command;
					availableResource = undefined;
					break;
				case "water":
					water += command;
					availableResource = undefined;
					break;
				default:
					availableResource = randomNumber % 2 === 0 ? "food" : "water";
			}
		}

		switch (command) {
			case "food":
				availableResource = "food";
				break;
			case "water":
				availableResource = "water";
				break;
		}

		food--;
		water--;

		if (food === 0 || water === 0) {
			return false;
		}
	}
	return true;
}
