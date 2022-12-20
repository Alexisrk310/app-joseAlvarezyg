import React from 'react';
import './styles/PostedVideosPage.css';
export interface PostedVideosPageInterface {}

const PostedVideosPage: React.FC<PostedVideosPageInterface> = () => {
	return (
		<div className="postedvideospage">
			<h4 className="text-center white posted-videos">VIDEOS PÚBLICADOS</h4>
			<div className="videos">
				<div className="video1">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/D2FyHvooV2M"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video2">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/W89RNHYE_VM"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video3">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/BKC4R8xDrmA"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video5">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/O50qpBuvme0"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video6">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/wMFiILrxx50"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video4">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/OvU3rVuLoBo"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video7">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/4gNshItEoQE"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video8">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/4gNshItEoQE"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video9">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/0ZvcSlZFHHk"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video10">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/t9wwhovW0S4"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video11">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/dNI5D0XpYQY"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
				<div className="video12">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/SfCvHR4M5-4"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
};

export default PostedVideosPage;
