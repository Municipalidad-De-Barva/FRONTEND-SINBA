import React from "react";

import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
	return (
		<>
			<Pdf targetRef={ref} filename="post.pdf">
				{({toPdf}) => <button onClick={toPdf}>Capture as PDF</button>}
			</Pdf>
		</>
	);
};
export default PDF;
