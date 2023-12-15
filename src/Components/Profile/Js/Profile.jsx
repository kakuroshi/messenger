import "../Style/Profile.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import ModalAddPost from "./ModalAddPost";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { NavLink } from "react-router-dom";

const Profile = (props) => {

	const [modalHelp, setFlag] = useState(false)

	const [urPosts, setPosts] = useState(
		[
			{
				text: 'Я с семьей в Москве!',
				postImg: ['https://i.mycdn.me/i?r=BEGKe-nuKdxQ4k4ObFcgiUc_2zQQRSIb9h6cOX5-5eSL-RIXZ_c0VwX52H1WSsf-pSwvoB5Uu97UrtMXO0DlFQNp',
					'https://i.mycdn.me/i?r=BEGKe-nuKdxQ4k4ObFcgiUc_2zQQRSIb9h6cOX5-5eSL-Y7Fmw5-qmmp2mc4iIwxjKs4-G6RuWSs2wG4uEkJpH_U',
					'https://i.mycdn.me/i?r=BEGKe-nuKdxQ4k4ObFcgiUc_2zQQRSIb9h6cOX5-5eSL-etl7jTxHY0Wfh1NbOg9IVPhPi5q7d3TMMo6uwSp2Udj'],
				likes: 0,
				dislikes: 0,
				comments: []
			}
		]
	)
	let helpPosts = [...urPosts]

	const [helpLike, setLike] = useState(new Array(urPosts.length))
	let likeHelp = [...helpLike]

	const [dislikeHelp, setDis] = useState(new Array(urPosts.length))
	let helpDis = [...dislikeHelp]

	const [showCom, setFlagCom] = useState(new Array(urPosts.length))
	let newAr = [...showCom]

	function likeBtn(flag, index) {
		if (flag) {
			if (dislikeHelp[index]) {
				helpDis[index] = false
				setDis(helpDis)
				helpPosts[index].dislikes -= 1
				setPosts(helpPosts)
			}

			helpPosts[index].likes += 1
			setPosts(helpPosts)
			helpLike[index] = true
			setLike(helpLike)
		} else if (!flag) {
			helpPosts[index].likes -= 1
			setPosts(helpPosts)
			helpLike[index] = false
			setLike(helpLike)
		}
	}

	function dislikeBtn(flag, index) {
		if (flag) {
			if (likeHelp[index]) {
				helpLike[index] = false
				setLike(helpLike)
				helpPosts[index].likes -= 1
				setPosts(helpPosts)
			}

			helpPosts[index].dislikes += 1
			setPosts(helpPosts)
			helpDis[index] = true
			setDis(helpDis)
		} else if (!flag) {
			helpPosts[index].dislikes -= 1
			setPosts(helpPosts)
			helpDis[index] = false
			setDis(helpDis)
		}
	}

	return (
		<main className="profile-page">

			<NavLink to="/home">
				<button className="btn-back-profile"><label htmlFor=""><ArrowBackIcon /></label></button>
			</NavLink>

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
					{props.state.userImages.map((el, index) => (
						<img key={index} className="photo-in-prof" src={el} alt="" />
					))}
				</div>
			</div>

			<hr className="hr-profile" />

			<div className="ur-posts-profile">
				<div className="head-posts-profile">
					<h1>Записи на вашей странице:</h1>
					<button onClick={modalHelp === false ? () => setFlag(true) : () => setFlag(false)} className="add-post-profile"><label htmlFor="">Создать запись</label></button>
				</div>

				<div style={modalHelp === true ? { display: "block" } : { display: "none" }}>
					<ModalAddPost setPosts={setPosts} />
				</div>

				<hr className="hr-profile" />

				<div className="ur-posts">
					{urPosts.map((el, index) => (
						<div key={index} className="post-home">
							<div className="post-head">
								<span className="img-post-user">
									<img className="post-img-user" src={props.state.userImg} alt="" />
								</span>
								<p className="user-post-name">{props.state.user}</p>
							</div>

							<hr className="hr-post" />

							<div className="post-content">
								<p className="post-text">{el.text}</p>
								<div className="images-post">
									{el.postImg.map((e, i) => <img className="img-in-post" key={i} src={e} alt="" />)}
								</div>
							</div>

							<div className="footer-post">
								<button onClick={newAr[index] === true ? () => {
									newAr[index] = false
									setFlagCom(newAr)
								} : () => {
									newAr[index] = true
									setFlagCom(newAr)
								}} className="comments-post"><CommentIcon /></button>

								<div className="likes-dislikes-post">
									<div className="likes-post">
										<button onClick={likeHelp[index] === true ? () => likeBtn(false, index) : () => likeBtn(true, index)}>

											<span style={likeHelp[index] === true ? { display: "none" } : { display: "block" }}>
												<ThumbUpOffAltIcon />
											</span>

											<span style={likeHelp[index] === true ? { display: "block" } : { display: "none" }} >
												<ThumbUpIcon />
											</span>
										</button>

										<p>{el.likes}</p>
									</div>

									<div className="dislikes-post">
										<button onClick={dislikeHelp[index] === true ? () => dislikeBtn(false, index) : () => dislikeBtn(true, index)}>
											<span style={dislikeHelp[index] === true ? { display: "block" } : { display: "none" }}>
												<ThumbDownIcon />
											</span>

											<span style={dislikeHelp[index] === true ? { display: "none" } : { display: "block" }}>
												<ThumbDownOffAltIcon />
											</span>
										</button>

										<p>{el.dislikes}</p>
									</div>
								</div>
							</div>

							<hr style={showCom[index] === true ? { display: "block" } : { display: "none" }} className="hr-post" />

							<div style={showCom[index] === true ? { display: "block" } : { display: "none" }} className="comments-post">

								{String(el.comments) === String([]) ? <h1>Нет комментариев</h1> : null}

								{el.comments.map((com, ind) => (
									<div key={ind} className="user-comment-post">
										<div className="comment-head">
											<span className="comment-user-img">
												<img src={com.userImg} alt="" />
											</span>
											<p className="user-comment-name">{com.user}</p>
										</div>

										<p className="comment-content">{com.text}</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Profile;
