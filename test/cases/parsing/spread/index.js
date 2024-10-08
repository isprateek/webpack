import X, { A, B } from "./module";
import * as M from "./module";

it("should support spread operator", function() {
	var o1 = { ...X };
	expect(o1).toEqual({ A: "A", B: "B" });
	var o2 = { ...({ X }) };
	expect(o2).toEqual({ X: { A: "A", B: "B" } });
	var o3 = { ...M };
	expect(o3).toEqual({ default: { A: "A", B: "B" }, A: "A", B: "B" });
	const test = [1, 2, 3];
	expect(
		(function(a, b, c) { return test; }(...test))
	).toEqual([1, 2 ,3]);
	expect(
		(function(a, b, c) { return test; }.call(...test))
	).toEqual([1, 2 ,3]);
});
