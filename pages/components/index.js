import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';
import background from '../images/background.jpg';
import profilePic from '../images/background.jpg';
import avatar from '../images/logochat.jpg';
//import '../styles/stylesChat.css'

export default function Home() {
  return (
    <div class="row"
      style={{ width: "100%", height: 700 }}
    >
      <div class="col-1 bg-primary menu">
        <ul class="nav flex-column col-12">
          <li class="nav-item">
            <Link class="nav-link active text-light" aria-current="page" href="#">
              <Image src={avatar}
                class="logo"
              />
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" href="#">Danh bạ</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" href="chat">Tin nhắn</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-light" href="setting">Cài đặt</Link>
          </li>
        </ul>
      </div>
      <div class="col-2">
        <div class="row container col-auto rounded-1">
          <div class="boxAvatar col-3 r">
            <Image
              src={profilePic}
              class="avatar2"
              alt="Avatar" />
          </div>
          <div class="col-9">
            <text class="nameChat">Nguyễn Văn Long</text>
          </div>
        </div>
      </div>
      <div class="col-9 bg-light">
        <div class="bg-primary">
          <text >Chat Messages</text>
        </div>
        <div>
          <div class="container">
            <Image src={profilePic}
              class="avatar"
              alt="Avatar" />
            <p>Hello. How are you today?</p>
            <span class="time-right">11:00</span>
          </div>

          <div class="container darker">
            <Image src={profilePic}
              class="right avatar"
              alt="Avatar" />
            <p>Hey! I'm fine. Thanks for asking!</p>
            <span class="time-left">11:01</span>
          </div>

          <div class="container">
            <Image src={profilePic}
              class="avatar"
              alt="Avatar" />
            <p>Sweet! So, what do you wanna do today?</p>
            <span class="time-right">11:02</span>
          </div>

          <div class="container darker">
            <Image src={profilePic}
              class="right avatar"
              alt="Avatar" />
            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
            <span class="time-left">11:05</span>
          </div>
        </div>
      </div>
    </div>);
}
