import "../Style/Home.css"
import HomeHeader from "./HomeHeader"
import HomeMain from "./HomeMain"
import { useState } from "react"

const Home = (props) => {

    const [posts, setPosts] = useState([
        {
            user: 'xXx_VoVaN_228_1488_xXx',
            userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg/274px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg',
            text: 'здарова пацаны я на рыбалке!',
            postImg: ['https://www.interfax.ru/ftproot/textphotos/2017/08/05/1100ht_Ot8.jpg', 'https://www.ridus.ru/images/2013/9/4/121059/in_article_5cd05372b8.webp'],
            likes: 1337,
            dislikes: 0,
            comments: [
                {
                    user: 'Женечка ")',
                    userImg: 'https://s0.rbk.ru/v6_top_pics/resized/200xH/media/img/1/85/756765585064851.webp',
                    text: 'Вован, лучший!!!'
                }
            ]
        },
        {
            user: 'xXx_VoVaN_228_1488_xXx',
            userImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg/274px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg',
            text: 'здарова пацаны я на рыбалке!',
            postImg: ['https://www.interfax.ru/ftproot/textphotos/2017/08/05/1100ht_Ot8.jpg',
                'https://www.ridus.ru/images/2013/9/4/121059/in_article_5cd05372b8.webp',
                'https://www.interfax.ru/ftproot/textphotos/2017/08/05/1100ht_Ot8.jpg',
                'https://www.ridus.ru/images/2013/9/4/121059/in_article_5cd05372b8.webp',
                'https://www.interfax.ru/ftproot/textphotos/2017/08/05/1100ht_Ot8.jpg',
                'https://www.ridus.ru/images/2013/9/4/121059/in_article_5cd05372b8.webp'],
            likes: 1337,
            dislikes: 0,
            comments: [
                {
                    user: 'Женечка ")',
                    userImg: 'https://s0.rbk.ru/v6_top_pics/resized/200xH/media/img/1/85/756765585064851.webp',
                    text: 'Вован, лучший!!!'
                }
            ]
        }
    ])

    return (
        <main className="homePage">
            <HomeHeader state={props.state} posts={posts} setPosts={setPosts} />
            <hr />
            <HomeMain posts={posts} setPosts={setPosts} state={props.state} />
        </main>
    )
}

export default Home