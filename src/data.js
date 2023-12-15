import Ageres from "./Components/Menu/Js/sergio_de_shuklini.webp"
import Elina from "./person18.png"
import Vasya from "./f5c1c89159ee89cbf853426085ddefa0.jpg"
import Roma from "./ab67616d0000b273b790c36296f90ca45b252539.jpg"
import render from "./render"

export let state = {
    user: "Сергей Шуклин",

    userImg: Ageres,

    userImages: [Ageres],

    dialogs: [
        {
            id: 0,
            img: Elina,
            unread: 1,
            name: "Elina Shuklina",
            lastMesAgo: "1 hour ago",
            action: "writes...",
            lastMessage: "When I was 4 years old, my parents abandoned me and I was forced to wander in the slums hoping for a morsel of food.... I'm very grateful to you, Sergei, because you gave me a second life... I am happy to be in 323 with our beloved children and Wilson."
        },
        {
            id: 1,
            img: Vasya,
            unread: 3,
            name: "Vasiliy Petrov",
            lastMesAgo: "1 minute ago",
            action: "online now",
            lastMessage: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
        },
        {
            id: 2,
            img: Roma,
            unread: 0,
            name: "Roman Sorokin",
            lastMesAgo: "24 minutes ago",
            action: "last online 15 minutes ago",
            lastMessage: "WOW!! I`M DID IT!!!"
        }
    ],

    users: [],

    searchInput: "",

    selectedChat: '0',

    chatMeaages: [],

    flagMes: 0
}

state.chatMeaages = Array.from({ length: state.dialogs.length }, () => Array(0))

export function addMesChat(message, id) {
    if (message !== '') {
        state.chatMeaages[id].push(message)

        state.urMessage = ''

        console.log(state.chatMeaages);

        render(state)
    }
}

export function selectChat(id) {
    state.selectedChat = id
    state.flagMes = 1;

    console.log(id);

    render(state)
}

export let users = []

export const addUser = () => {
    const defAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vladimir_Putin_September_5%2C_2022_%28cropped%29.jpg/260px-Vladimir_Putin_September_5%2C_2022_%28cropped%29.jpg"

    const unr = prompt("Непрочитанные")
    const nme = prompt("Имя")
    const lMesA = prompt("Когда последнее сообщение")
    const act = prompt("Действие")
    const lMes = prompt("Последнее сообщение")

    state.dialogs.push({
        id: state.dialogs.length,
        img: defAvatar,
        unread: unr,
        name: nme,
        lastMesAgo: lMesA,
        action: act,
        lastMessage: lMes
    })

    render(state)
}

export function changeDialogs() {
    const search = document.querySelector('.searchChat').value

    if (search === "") {
        state.users = []
    } else {
        for (let i = 0; i < state.dialogs.length; i++) {
            if (state.dialogs[i].name.toLowerCase().includes(search.toLowerCase())) {
                for (let j = 0; j < state.users.length; j++) {
                    if (state.dialogs[i].name === state.users[j].name) {
                        state.users.splice(0)
                    }
                }
                state.users.push(state.dialogs[i])
            }
        }
    }

    state.searchInput = search
    render(state)
}