import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <h3>Pa krenimo redom...</h3>
        <SpeakerNotes>Pa eto krenimo redom.</SpeakerNotes>
      </section>

      <section>
        <h3>Što je Firebase?</h3>
        <img src="assets/firebase.png" alt="Firebase screenshot" style={{}} />
        <SpeakerNotes>Prvo kratko ćemo objasniti što je Firebase.</SpeakerNotes>
      </section>

      <section>
        <section>
          <h3>Što je Firebase Authentication?</h3>
          <img
            src="assets/firebase-authentication.png"
            alt="Firebase Authentication screenshot"
            style={{}}
          />
          <SpeakerNotes>
            Prvo kratko ćemo objasniti što je Firebase Authentication.
          </SpeakerNotes>
        </section>
        <section>
          <h3>Što kaže Google?</h3>
          <iframe
            width="780"
            height="420"
            src="https://www.youtube-nocookie.com/embed/8sGY55yxicA?si=AWpS8kAszgHDzw0v&amp;start=15"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </section>

      <section>
        <section>
          <h3>Što je zaista Firebase i Firebase Authentication?</h3>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              height="515"
              src="assets/firebase-gcp-meme.png"
              alt="Firebase Firebase GCP meme"
              style={{
                marginLeft: "50px",
              }}
            />
            <img
              height="515"
              src="assets/firebase-authentication-gcp-meme.png"
              alt="Firebase Firebase GCP meme"
              style={{
                marginRight: "50px",
              }}
            />
          </div>
          <SpeakerNotes>
            Prvo kratko ćemo objasniti što je Firebase Authentication.
          </SpeakerNotes>
        </section>
        <section>
          <img
            height="515"
            src="assets/mooolim.png"
            alt="Mooolim meme"
            style={{}}
          />
          <SpeakerNotes>
            Kretat ćemo kronološki. Svaka faza ima svoje lekcije.
          </SpeakerNotes>
        </section>
      </section>

      <section>
        <section>
          <h4>
            Ako vas netko doda u Firebase projekt na kojem je uključen billing,
             može kreirati{" "}
            <a>bilo koji servis na Google Cloud Platformi !!!</a>
          </h4>
          <img
            height="515"
            src="assets/gcp-firebase-issue.png"
            alt="Firebase Firebase GCP meme"
            style={{
              marginRight: "50px",
            }}
          />
          <SpeakerNotes>
            Ovdje je ključna stvar da su usluge i dopuštenja ujedno povezane s
            billing okolinom projekta.
          </SpeakerNotes>
        </section>
        <section>
          <h4>
            <a href="https://console.firebase.google.com/" target="_blank">
              Firebase Console
            </a>{" "}
            je zapravo isto što i{" "}
            <a href="https://console.cloud.google.com/" target="_blank">
              Google Cloud Console
            </a>
          </h4>
          <img
            height="515"
            src="assets/gcp-firebase-issue-02.png"
            alt="Firebase Firebase GCP meme"
            style={{
              marginRight: "50px",
            }}
          />
          <SpeakerNotes>
            Ovdje je ključna stvar da su usluge i dopuštenja ujedno povezane s
            billing okolinom projekta.
          </SpeakerNotes>
        </section>
      </section>

      <section>
        <h2>Ok, ludo... pa tko bi uopće koristio Firebase?</h2>
        <p>(Nakon što smo samo ovo vidjeli)</p>
        <SpeakerNotes>
          Firebase je popularan među developerima zbog jednostavnosti i
          integracije s Google Cloud Platformom.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Jako, jako puno developera!</h2>
        <p>
          Firebase je jako korišten među developerima zbog svoje jednostavnosti.
        </p>

        <SpeakerNotes>
          Firebase je stvarno popularan među developerima zbog jednostavnosti i
          integracije s Google Cloud Platformom, podrškom za više Idenitity
          providera out of the box, te bogatim skupom alata za razvoj mobilnih i
          web aplikacija. Ako ste ikada koristili push notifikacije morali ste
          se susresti s Firebaseom. Znači ako ste ikad radili s Androidom ili
          Google Cloud Messagingom, vjerojatno ste koristili Firebase.
        </SpeakerNotes>
      </section>

      <section>
        <h3 style={{ textAlign: "left" }}>
          Chapter 1: <a>Otkriće</a>
        </h3>
        <ul style={{ textAlign: "left" }}>
          <li>
            Otvorio sam Jira ticket na poslu s zadatkom za implementaciju
            Firebase registracije i login-a
          </li>
          <li>
            Preuzeo sam Firebase konfiguraciju za Web App, započeo
            implementaciju, i već nakon par minuta primijetio nešto jako čudno.
          </li>
          <li>
            Moj račun je aktiviran(email verificiran) nakon registracije bez da
            sam išta kliknuo. 🚩
          </li>
        </ul>
        <p style={{ textAlign: "left" }}></p>
        <SpeakerNotes>
          Prilikom implementacije firebase registracije i login-a uočio sam da
          je moj račun aktiviran (email verificiran) nakon registracije bez da
          sam išta kliknuo. 🚩
        </SpeakerNotes>
      </section>

      <section>
        <h3 style={{ textAlign: "left" }}>Kratko pojašnjenje</h3>
        <pre>
          <code
            data-line-numbers="5-7,3"
            data-trim
            className="language-javascript"
            data-noescape
          >{`
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
          `}</code>
          <ul style={{ textAlign: "left", marginTop: "1em" }}>
            <li>
              createUserWithEmailAndPassword registrira usera u Firebase
              Authentication sustavu. Ne šalje mail.
            </li>
            <li>
              onAuthStateChanged služi za praćenje promjena stanja
              autentifikacije korisnika.
            </li>
            <li>
              <a>sendEmailVerification</a> šalje email za verifikaciju
              korisnika. 🚩
            </li>
            <li>
              signInWithEmailAndPassword služi za prijavu korisnika koristeći
              email i lozinku.
            </li>
          </ul>
        </pre>

        <SpeakerNotes>
          Prilikom implementacije firebase registracije i login-a uočio sam da
          je moj račun aktiviran (email verificiran) nakon registracije bez da
          sam išta kliknuo. 🚩
        </SpeakerNotes>
      </section>

      <section>
        <h3 style={{ textAlign: "left" }}>
          <a>$</a> echo $JWT | cut <a>-d</a> '.' <a>-f2</a> | base64 <a>-d</a>
        </h3>
        <pre>
          <code
            data-trim
            className="language-javascript"
            data-noescape
          >{`eyJhbGciOiJSUzI1NiIsImtpZCI6ImVjMjdhOWI2YWEzMDg4ZDI3Y2FkYjFjNjRmYTJmYTQ1Y2Y5ZmQ5ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20veDJiYWQwMCIsImF1ZCI6IngyYmFkMDAiLCJhdXRoX3RpbWUiOjE3OTAwODA0OTcsInVzZXJfaWQiOiJoUElIMkR1WkpOZDhSQ1dIVjVnNmR6S0VvNXcyIiwic3ViIjoiaFBJSDJEdVpKTmQ4UkNXSFY1ZzZkektFbzV3MiIsImlhdCI6MTc5MDA4MDQ5NywiZXhwIjoxNzkwMDg0MDk3LCJlbWFpbCI6ImdvcmRhbi5uZWtpY0BlbGl4aXJyLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImdvcmRhbi5uZWtpY0BlbGl4aXJyLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PIq6JaEWFiTEa9pTholNW1kn2uLGSTBq1QT1cntD-vWmSpXNaM8ANHaOrkTZyQwXJoJr3VobNB0EiMaIcCb99bz3Nu-f1NZJYPs2aqIyx4oS6QLcsoaRWHiUCOguZIazjP8s4Hiewuo3lH4b4XOLcKb7r7ODoXaWXs-Wz9_E5w0AXdne2IsrNnqhWRoE8_KqCJYU7Ppbd7HIQcib1ZpmCUcUrqjWXDC0-2Ngz5quykKqqrCOBbxOVPYiEf1GsseIg6vVOAhzAhMTs4J6uJ2NLJD0R2q01OZ8IPRjIrGR1oWY9WUPSMTreh2h5mAiFWEgeSAmMFdZ6vzrK6rOO2RqEQ`}</code>
        </pre>
        <pre>
          <code
            data-line-numbers="10-10"
            data-trim
            className="language-javascript"
            data-noescape
          >{`{\n  "iss": "https://securetoken.google.com/x2bad00",\n  "aud": "x2bad00",\n  "auth_time": 1790080497,\n  "user_id": "hPIH2DuZJNd8RCWHV5g6dzKEo5w2",\n  "sub": "hPIH2DuZJNd8RCWHV5g6dzKEo5w2",\n  "iat": 1790080497,\n  "exp": 1790084097,\n  "email": "gordan.nekic@elixirr.com",\n  "email_verified": true,\n  "firebase": {\n    "identities": {\n      "email": [\n        "gordan.nekic@elixirr.com"\n      ]\n    },\n    "sign_in_provider": "password"\n  }\n}`}</code>
        </pre>

        <SpeakerNotes>
          Prilikom implementacije firebase registracije i login-a uočio sam da
          je moj račun aktiviran (email verificiran) nakon registracije bez da
          sam išta kliknuo. 🚩
        </SpeakerNotes>
      </section>

      <section>
        <h3 style={{ textAlign: "left" }}>Pokušaj reprodukcije</h3>
        <ul style={{ textAlign: "left" }}>
          <li>Nikako da ponovo izazovem isti rezultat.</li>
          <li>Registriram se i registriram ponovo kad ono ništa.</li>
          <li>
            Upišem podatke kolege i primijetim da je njegov račun također
            automatski aktiviran. 🚩
          </li>
          <li>..okej sad nešto stvarno ne štima</li>
        </ul>
        <p style={{ textAlign: "left" }}></p>
        <SpeakerNotes>
          Prilikom implementacije firebase registracije i login-a uočio sam da
          je moj račun aktiviran (email verificiran) nakon registracije bez da
          sam išta kliknuo. 🚩
        </SpeakerNotes>
      </section>
      <section>
        <h3 style={{ textAlign: "left" }}>Pokušaj 2</h3>
        <ul style={{ textAlign: "left" }}>
          <li>
            Ok, znači ovo se dogodi samo ako šaljem kolegama u firmi na mail.
          </li>
          <li>Mora biti nešto do naše domene.</li>
          <li>
            Pitam kolegu iz druge firme na drugoj domeni ako mogu testirat na
            njegovom mailu, bam i njega je automatski verificiralo. 🚩
          </li>
          <li>..okej što mi svi imamo skupa a moj privatni mail nema</li>
          <li>hey imate vi možda aktiviran email scanner? -da</li>
        </ul>
        <p style={{ textAlign: "left" }}></p>
        <SpeakerNotes>
          Prilikom implementacije firebase registracije i login-a uočio sam da
          je moj račun aktiviran (email verificiran) nakon registracije bez da
          sam išta kliknuo. 🚩
        </SpeakerNotes>
      </section>

      <section>
        <h3 style={{ textAlign: "left" }}>
          Chapter 2: <a>Ali zašto???</a>
        </h3>
        <ul style={{ textAlign: "left" }}>
          <li>Znamo da je do email scannera, ali kako to točno funkcionira?</li>
          <li>
            Analizom maila primjetio sam da mail sadrži link za aktivaciju
            računa.
          </li>
        </ul>
        <pre>
          <code
            data-line-numbers="5-5"
            data-trim
            className="language-text"
            data-noescape
          >{`Hello,

Follow this link to verify your email address.

https://x2bad00.firebaseapp.com/__/auth/action?mode=verifyEmail&oobCode=bSkKBuzZm2xolSuBtyWU0Gp1uvixHcLH0qNBIrcm8bsAAAGgxns2cA&apiKey=AIzaSyB2UX-GjAnsVoQ8oggOwjbT0nWJe6KiQH0&lang=en

If you didn’t ask to verify this address, you can ignore this email.

Thanks,

Your x2bad00 team`}</code>
        </pre>
        <SpeakerNotes>
          Prilikom implementacije firebase registracije i login-a uočio sam da
          je moj račun aktiviran (email verificiran) nakon registracije bez da
          sam išta kliknuo. 🚩
        </SpeakerNotes>
      </section>

     <section>
          <h4>
            Ma mora biti do tog linka.
          </h4>
          <img
            src="assets/firebase-hosted-ui-auth.png"
            alt="Firebase UI"
            style={{
              marginRight: "50px",
            }}
          />
          <SpeakerNotes>
            Ovdje je ključna stvar da su usluge i dopuštenja ujedno povezane s
            billing okolinom projekta.
          </SpeakerNotes>
        </section>

      <section>
        <h3>Kako? Hosted UI on load via JS ili GET request?</h3>
        <ul>
          <li>Poslao sam verifikacijski link na svoj privatni mail</li>
          <li>Manual curl -X GET</li>
          <li>Ok znači do učitavanja browsera s aktivnim JS-om?</li>
          <li>Mail scanner ga baš otvori onako dobro?</li>
        </ul>
        <SpeakerNotes>
          Poslao sam verifikacijski link na svoj privatni mail, opalio manual curl -x GET
        </SpeakerNotes>
      </section>

       <section>
        <h3>Meet the Microsoft Office 365 email scanner</h3>
<img
            src="assets/ms-defender-email-scanner.webp"
            alt="Microsoft Office 365 email scanner"
            style={{
              marginRight: "50px",
            }}
          />
       
        
        <SpeakerNotes>
          Reprodukcija u kontroliranom okruženju ključna je kako bismo potvrdili
          uzrok bez utjecaja na stvarne korisnike.
        </SpeakerNotes>
      </section>

      <section>
        <h3>Procjena utjecaja i prijava problema Google-u</h3>
        <ul>
          <li>Koje se akcije mogu dovršiti samo otvaranjem linka?</li>
           - <a>Verifikacija emaila, otkazivanje MFA</a>
            <br />
          <li>Koje domene i tenanti su pogođeni?</li>
          - <a>Svi Office 365 Business tenanti koji imaju omogućeno skeniranje emailova, i svi ostali</a>
            <br />
          <li>Koja je realna sposobnost napadača?</li>
          - <a>ovisi o mašti, npr. moguće je čak enumerirati postojeće emailove na nekom tenantu, ali novi toolkit je tu, free provided by Google</a>
            <br />
        </ul>
        <SpeakerNotes>
          Fokusiramo se na praktičan opseg, ne samo na teorijski utjecaj.
        </SpeakerNotes>
      </section>

      <section>
        <h2>Disclosure</h2>
        <p>
          U ovom slučaju prijava je bila odgovorno podnesena i koordinirana kroz
          službeni proces, a rezultat <a>nagrade</a> je vidljiv na Google Bug
          Hunters platformi.
        </p>
        <p>
          <a
            href="https://bughunters.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            Google Bug Hunters rezultat
          </a>
        </p>
        <SpeakerNotes>
          Ovakvi problemi često zahtijevaju suradnju između pružatelja usluga.
          Niti jedna strana ne može sama popraviti cijeli ekosustav.
        </SpeakerNotes>
      </section>
      <section>
        <h2>The End ?</h2>
        <SpeakerNotes>
          Ovakvi problemi često zahtijevaju suradnju između pružatelja usluga.
          Niti jedna strana ne može sama popraviti cijeli ekosustav.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Nope...</h2>
        <SpeakerNotes>
          Ovakvi problemi često zahtijevaju suradnju između pružatelja usluga.
          Niti jedna strana ne može sama popraviti cijeli ekosustav.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Timeline</h2>
        <ol>
          <li>Initial discovery of the issue</li>
          <li>Controlled reproduction of the problem</li>
          <li>Impact assessment and reporting to Google</li>
          <li>Responsible disclosure and coordination</li>
          <li>Resolution and reward on Google Bug Hunters platform</li>
        </ol>
        <SpeakerNotes>
          Ovakvi problemi često zahtijevaju suradnju između pružatelja usluga.
          Niti jedna strana ne može sama popraviti cijeli ekosustav.
        </SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;
