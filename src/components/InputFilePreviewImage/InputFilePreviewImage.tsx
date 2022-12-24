import React, { useState } from 'react';
import './styles/InputFilePreviewImage.css';
export interface InputFilePreviewImageInterface {}

const InputFilePreviewImage: React.FC<InputFilePreviewImageInterface> = () => {
	const [profileImg, setProfileImg] = useState({
		profileImga:
			'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
	});

	const imageHandler = (e: any) => {
		const readerProfile = new FileReader();
		readerProfile.onload = () => {
			if (readerProfile.readyState === 2) {
				setProfileImg({
					profileImga: readerProfile.result,
				} as any);
			}
		};
		readerProfile.readAsDataURL(e.target.files[0]);
	};
	return (
		<div className="page-all">
			<div className="container-preview-restaurant">
				<div className="img-holder">
					<img
						src={profileImg.profileImga}
						alt=""
						id="img"
						className="img-of-restaurant"
					/>
				</div>
				<input
					type="file"
					accept="image/*"
					name="image-upload"
					id="input"
					onChange={imageHandler}
				/>
				<div className="label">
					<label className="image-upload" htmlFor="input">
						Foto de restaurante
					</label>
				</div>
			</div>
		</div>
	);
};

export default InputFilePreviewImage;
