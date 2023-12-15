import "../Style/ModalAddPost.css"
import { useState } from "react"

const ModalAddPost = ({ setPosts }) => {

    const [urText, setText] = useState("")

    return (
        <div className="modal-add-post-profile">
            <hr />

            <h1>Создание записи:</h1>

            <div className="new-post-main-profile">
                <textarea onChange={e => setText(e.target.value)} value={urText} cols="200" rows="5" className="text-new-post-profile" placeholder="Введите текст записи..."></textarea>
                <button onClick={() => {

                    setPosts(prevArray => [
                        {
                            text: urText,
                            postImg: [],
                            likes: 0,
                            dislikes: 0,
                            comments: []
                        },
                        ...prevArray
                    ]
                    )

                    setText('')
                }
                } className="add-post-profile-btn"><label htmlFor="">Опубликовать</label></button>
            </div>
        </div>
    )
}

export default ModalAddPost