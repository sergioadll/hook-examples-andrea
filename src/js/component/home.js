import React from "react";
import { CallVictor } from "./CallVictor";
import { ChangeName } from "./ChangeName";

export function Home() {
	return (
		<>
			<h1 className="text-center m-5">Change Name Example</h1>
			<ChangeName />
			<h1 className="text-center m-5">Call Victor Example</h1>
			<CallVictor />
		</>
	);
}
