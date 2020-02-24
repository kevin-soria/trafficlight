// import React from "react";
import React, { useState } from "react";

export function Home() {
	const [redLight, setRedlight] = useState("inactive");
	const [yellowLight, setYellowlight] = useState("inactive");
	const [greenLight, setGreenlight] = useState("inactive");

	return (
		<div className="container lightFixture">
			<div
				className={redLight}
				onClick={() => {
					setRedlight(redLight === "red" ? "inactive" : "red");
					setYellowlight(
						redLight === "red" ? "inactive" : "inactive"
					);
					setGreenlight(redLight === "red" ? "inactive" : "inactive");
				}}
			/>
			<div
				className={yellowLight}
				onClick={() => {
					setYellowlight(
						yellowLight === "yellow" ? "inactive" : "yellow"
					);
					setRedlight(
						yellowLight === "red" ? "inactive" : "inactive"
					);
					setGreenlight(
						yellowLight === "yellow" ? "inactive" : "inactive"
					);
				}}
			/>
			<div
				className={greenLight}
				onClick={() => {
					setGreenlight(
						greenLight === "green" ? "inactive" : "green"
					);
					setRedlight(
						greenLight === "green" ? "inactive" : "inactive"
					);
					setYellowlight(
						greenLight === "green" ? "inactive" : "inactive"
					);
				}}
			/>
		</div>
	);
}
