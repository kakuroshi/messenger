import "../Style/Profile.css";

const Profile = (props) => {
	return (
		<main className="profile-page">
			<div className="head-profile">
				<span className="img-profile">
					<img src={props.state.userImg} alt="no img" />
				</span>

				<div className="user-inf-name">
					<h1 className="name-user-profile">{props.state.user}</h1>

					<h1 className="online-profile">Online</h1>
				</div>
			</div>

			<hr className="hr-profile" />

			<div className="photos-profile">
				<h1>Ваши фото:</h1>

				<div className="photos-in-prof">
					{props.state.userImages.map((el) => (
						<img className="photo-in-prof" src={el} alt="" />
					))}
				</div>
			</div>

			<hr className="hr-profile" />

			<div className="ur-posts-profile">
				<div className="head-posts-profile">
					<h1>Записи на вашей странице:</h1>
					<button className="add-post-profile"><label htmlFor="">Создать запись</label></button>
				</div>
			</div>
		</main>
	);
};

export default Profile;
