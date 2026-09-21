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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
      </section>

      <section>
        <h3>Što je zaista Firebase i Firebase Authentication?</h3>
        <div
          style={{ flexDirection: "row", display: "flex", justifyContent: "space-between" }}
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
          style={{
          }}
        />
        <SpeakerNotes>
          We’ll move chronologically. Each phase has its own lessons.
        </SpeakerNotes>
      </section>
      <section>
        <h4>To znači da ako vas netko doda u Firebase Projekt, na kojem je uključen billing, on može kreirati <a>bilo koji servis na Google Cloud Platformi!!!</a></h4>
        <img
          height="515"
          src="assets/gcp-firebase-issue.png"
          alt="Firebase Firebase GCP meme"
          style={{
            marginRight: "50px",
          }}
        /> 
        <SpeakerNotes>
          We’ll move chronologically. Each phase has its own lessons.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Discovery</h2>
        <p>A user link completes an action without user intent.</p>
        <ul>
          <li>Observed in enterprise domains</li>
          <li>Triggered by automated email scanning</li>
        </ul>
        <SpeakerNotes>
          The first signal was a “user never clicked” report that still had a
          completed action.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Reproduction</h2>
        <ul>
          <li>Create a controlled test tenant</li>
          <li>Enable security link scanning</li>
          <li>Send a GIS/Firebase action link</li>
          <li>Observe automatic completion</li>
        </ul>
        <SpeakerNotes>
          Repro in a controlled setup is essential to validate the root cause
          without affecting real users.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Impact assessment</h2>
        <ul>
          <li>Which actions can be completed by link-open alone?</li>
          <li>Which domains and tenants are affected?</li>
          <li>What is the realistic attacker capability?</li>
        </ul>
        <SpeakerNotes>
          We focus on the practical scope, not just theoretical impact.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Disclosure and fix</h2>
        <p>Coordinated disclosure across service providers.</p>
        <SpeakerNotes>
          These issues often require collaboration between vendors. No single
          party can fully patch the ecosystem alone.
        </SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;
