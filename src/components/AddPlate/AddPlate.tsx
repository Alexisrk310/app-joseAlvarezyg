import React, { useState } from 'react';
import './styles/AddPlate.css';
export interface AddPlateInterface {}
import Img from "react-cool-img";


const AddPlate: React.FC<AddPlateInterface> = () => {
	const [plateImg, setPlateImg] = useState({
		platesimg:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	});

	const HandlePlates = (e: any) => {
		const readerPlate = new FileReader();
		readerPlate.onload = () => {
			if (readerPlate.readyState === 2) {
				setPlateImg({
					platesimg: readerPlate.result,
				} as any);
			}
		};
		readerPlate.readAsDataURL(e.target.files[0]);
	};
	return (
		<div className="page-plate">
			<div className="container-plate">
				<div className="img-holder-plate">
					<Img lazy={true} src={plateImg.platesimg} alt="" id="img" className="img-plate" />
				</div>
				<input
					type="file"
					accept="image/*"
					name="image-upload"
					id="input"
					onChange={HandlePlates}
				/>
				<div className="label">
					<label className="image-upload-plate" htmlFor="input">
						Elige la foto
					</label>
				</div>
			</div>
		</div>
	);
};

export default AddPlate;
