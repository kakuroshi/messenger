import "../Style/HomeMain.css"
import { useState } from "react";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddComment from "./AddComment";

const HomeMain = ({ state, setPosts, posts }) => {


    let helpPosts = [...posts]

    const [showCom, setFlag] = useState(new Array(posts.length))
    let helpCommet = [...showCom]

    const [likeHelp, setLike] = useState(new Array(posts.length))
    let helpLike = [...likeHelp]

    const [dislikeHelp, setDis] = useState(new Array(posts.length))
    let helpDis = [...dislikeHelp]

    const [comHelp, setHelpCom] = useState(null)

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

            console.log(posts[index].likes);
        } else if (!flag) {
            helpPosts[index].likes -= 1
            setPosts(helpPosts)
            helpLike[index] = false
            setLike(helpLike)
            console.log(posts[index].likes)
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
        <div className="main-home">
            {posts.map((el, index) => (
                <div key={index} className="post-home">
                    <div className="post-head">
                        <span className="img-post-user">
                            <img className="post-img-user" src={el.userImg} alt="" />
                        </span>
                        <p className="user-post-name">{el.user}</p>
                    </div>

                    <hr className="hr-post" />

                    <div className="post-content">
                        <p className="post-text">{el.text}</p>
                        <div className="images-post">
                            {el.postImg.map((e, i) => <img className="img-in-post" key={i} src={e} alt="" />)}
                        </div>
                    </div>

                    <div className="footer-post">
                        <button onClick={showCom[index] === true ? () => {
                            helpCommet[index] = false
                            setFlag(helpCommet)
                        } : () => {
                            helpCommet[index] = true
                            setFlag(helpCommet)
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
                        <div className="comments-head-news">
                            <h2>Комментарии:</h2>
                            <button onClick={comHelp === true ? () => setHelpCom(false) : () => setHelpCom(true)} className="add-com-btn-prof"><label htmlFor="">Добавить</label></button>
                        </div>

                        <div style={comHelp === true ? { display: "block" } : { display: "none" }}>
                            <AddComment index={index} posts={posts} setPosts={setPosts} state={state} />
                        </div>

                        {el.comments.map((com, ind) => (
                            <div key={ind} className="user-comment-post">
                                <div className="comment-head">
                                    <span className="comment-user-img">
                                        <img src={com.userImg} alt="no img" />
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
    )
}

export default HomeMain