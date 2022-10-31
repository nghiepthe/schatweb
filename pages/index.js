import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div class="container-filip">
      <div class="no-gutters">
        <div class="bg-primary align-item-center ">
          <nav>
            <ul class="nav nav-pills">
              <li class="nav-item text-center align-item-center">
                <Link class="nav-link text-light" href="#">SCHAT</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" href="chat">Chat</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" href="setting">Setting</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="row mt-2">
          <div class="col-md-4 border-right">
            <div class="settings-tray">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg" alt="Profile img" />
              <span class="settings-tray--right">
                <i class="bi bi-arrow-repeat"></i>
                <i class="bi bi-chat-left-text"></i>
                <i class="bi bi-list"></i>
              </span>
            </div>
            <div class="search-box">
              <div class="input-wrapper">
                <i class="bi bi-search"></i>
                <input placeholder="Search here" type="text" />
              </div>
            </div>
            <div class="friend-drawer friend-drawer--onhover">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="" />
              <div class="text">
                <h6>Robo Cop</h6>
                <p class="text-muted">Hey, you're arrested!</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr></hr>
            <div class="friend-drawer friend-drawer--onhover">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg" alt="" />
              <div class="text">
                <h6>Optimus</h6>
                <p class="text-muted">Wanna grab a beer?</p>
              </div>
              <span class="time text-muted small">00:32</span>
            </div>
            <hr></hr>
            <div class="friend-drawer friend-drawer--onhover ">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png" alt="" />
              <div class="text">
                <h6>Skynet</h6>
                <p class="text-muted">Seen that canned piece of s?</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr></hr>
            <div class="friend-drawer friend-drawer--onhover">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg" alt="" />
              <div class="text">
                <h6>Termy</h6>
                <p class="text-muted">Im studying spanish...</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr></hr>
            <div class="friend-drawer friend-drawer--onhover">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg" alt="" />
              <div class="text">
                <h6>Richard</h6>
                <p class="text-muted">I'm not sure...</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr></hr>
            <div class="friend-drawer friend-drawer--onhover">
              <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rachel.jpeg" alt="" />
              <div class="text">
                <h6>XXXXX</h6>
                <p class="text-muted">Hi, wanna see something?</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
          </div>
          <div class="col-md-8">
            <div class="settings-tray">
              <div class="friend-drawer no-gutters friend-drawer--grey">
                <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="" />
                <div class="text">
                  <h6>Robo Cop</h6>
                  <p class="text-muted">Layin' down the law since like before Christ...</p>
                </div>
                <span class="settings-tray--right">
                  <i class="bi bi-arrow-repeat"></i>
                  <i class="bi bi-chat-left-text"></i>
                  <i class="bi bi-list"></i>
                </span>
              </div>
            </div>
            <div class="chat-panel">
              <div class="row no-gutters">
                <div class="col-md-3">
                  <div class="chat-bubble chat-bubble--left">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-3 offset-md-9">
                  <div class="chat-bubble chat-bubble--right">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-3 offset-md-9">
                  <div class="chat-bubble chat-bubble--right">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-3">
                  <div class="chat-bubble chat-bubble--left">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-3">
                  <div class="chat-bubble chat-bubble--left">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-3">
                  <div class="chat-bubble chat-bubble--left">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-3 offset-md-9">
                  <div class="chat-bubble chat-bubble--right">
                    Hello dude!
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 mb-8">
                  <div class="chat-box-tray">
                    <i class="bi bi-emoji-laughing"></i>
                    <input type="text" placeholder="Type your message here..." />
                    <i class="bi bi-mic"></i>
                    <i class="bi bi-send"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
