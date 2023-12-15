import "../Style/AddComment.css"
import { useState } from "react"

const AddComment = ({ setPosts, posts, state, index }) => {

    const [com, setCom] = useState('')

    let helpCom = [...posts]

    return (
        <div className="add-com-cont">
            <textarea className="add-com-news-inp" onChange={e => setCom(e.target.value)} value={com} cols="100" rows="5"></textarea>

            <button onClick={() => {

                if (com !== '') {
                    let comment = {
                        user: state.user,
                        userImg: state.userImg,
                        text: com
                    }

                    helpCom[index].comments.push(comment)
                    setPosts(helpCom)
                    setCom('')
                }
                
            }} className="add-com-btn"><label htmlFor="">Добавить комментарий</label></button>
        </div>
    )
}

export default AddComment