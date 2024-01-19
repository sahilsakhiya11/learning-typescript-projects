// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

const announceMachines = (announce, ...machines) => {
	let label;
	let labelsCount = 0;

	for (let machine of machines) {
		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}
		announce(label);
	}
	return labelsCount;
};

module.exports.announceMachines = announceMachines;
