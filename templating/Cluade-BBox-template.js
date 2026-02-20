
// This class represents a bounding box.
export default class BBox {
	_changeListeners = []

	// NOTE: all functions that mutate private fields, except onChange and offChange, must call the changed function to notify listeners a change has occurred. 
	// NOTE: all functions without an implicit or explicit return, should return the class instance for method chaining. 

	// TODO: Generate the following internal fields: left, top, right, bottom, centerX, centerY, width, height.

	// TODO: Generate getters for all private fields.

	// TODO: Generate a function that returns the center as an object.  

	// TODO: Generate a function that returns the center as an array.

	// TODO: Generate a function that returns the size as an object.

	// TODO: Generate a function that returns the size as an array.

	// TODO: Generate set functions for left, top, right, and bottom fields. Make sure they update other fields where necessary.

	// Sets the position or sixe of the box, updating other fields appropriately. Passing null for any argument will keep that field value the same.
	set(left, top, right, bottom) {
		// TODO: Implement this function.
	}

	// Sets the center of the box, updating other fields appropriately. Passing null for either x or y will keep that value the same.
	setCenter(x, y) {
		// TODO: Implement this function.
	}

	// Sets the size of the box, updating other fields appropriately. The origin argument determines how the box should be resized. Possible origins include a vertical component (top, center, or bottom) then a horizontal component (left, center, right), e.g. 'center left'. Passing null for either width or height will keep that dimension the same size.
	setSize(width, height, origin='center center') {
		// TODO: Implement this function.
	}

	// Returns true if the point specified by the x and y arguments is contained within the bounding box. If excludeBorderline is true, then false is returned given a point laying on the box's border. 
	contains(x, y, excludeBorderline=false) {
		// TODO: Implement this function.
	}

	// Moves the box along the x and y planes by deltaX and deltaY respectively. 
	translate(deltaX, deltaY) {
		// TODO: Implement this function.
	}

	// Returns true if the box overlaps the argument bbox. If excludeBorderline is true, then false is returned the boxes overlap on thier borders. 
	overlaps(bbox, excludeBorderline=false) {
		// TODO: Implement this function.
	}

	// Registers the argument function (func) as a change listener, if not already registered. If a function mutating a field value is invoked, the listener will be called with an array of field names that have changed.
	onChange(func) {
		// TODO: Implement this function.
	}

	// Unregisters the argument function (func) from the list of change listeners, if it's registered.
	offChange(func) {
		// TODO: Implement this function.
	}

	// Notifies the change listeners that a change has occurred and what values have been changed. The changed fields argument must be an array of field names that have changed.
	changed(changedFields) {
		// TODO: Implement this function.
	}
}

// TODO: Write simple human readable documentation for functions that don't currently have documentation.
// TODO: Remove all NOTE and TODO comments but keep all other comments.
