import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';
import background from '../images/background.jpg';
import profilePic from '../images/QRCode.jpg';

export default function Login() {
  return (
    <div class="container-fluid align-items-center bg-image background"
      // style={{ backgroundImage: "url('../images/background.jpg')", width: "100%", height: "100%" }}
    >
      <div className={styles.main}>
        <div class="row col-sm-6 rounded-1 p-3"
          style={{ backgroundColor: "#36393f" }}
        >
          <div class="row col-sm-8">
            <form class="row gx-3 gy-2 align-items-center">
              {/* <div class="align-items-center"> */}
              <h1 class="text-light d-flex justify-content-center">Login</h1>
              <div class="col-12">
                <label for="inputAddress" class="form-label text-secondary">Account</label>
                <input type="text" class="form-control bg-dark border border-0 text-light rounded-1" id="inputAddress" />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label text-secondary" >Password</label>
                <input type="password" class="form-control bg-dark border border-0 text-light rounded-1" id="inputAddress2" />
                <Link href="resetpassword" class="text-primary-80 nav-link">Reset password</Link>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary rounded-1">Sign in</button>
                <Link href="create" class="text-primary nav-link">Create account</Link>
              </div>
              {/* </div> */}
            </form>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <div class="col-12 text-center mt-4">
              <h5 class="text-light">Log in with QR Code</h5>
              <Image
                src={profilePic}
                width={"100%"}
                height={200}
                alt="Picture of the author"
                class="col-sm-12"
              />
              <text class="text-light">Please scan the qr code</text>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
