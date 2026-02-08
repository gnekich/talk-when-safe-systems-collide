import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <h2>Firebase & GIS: a quick primer</h2>
        <p>
          Firebase Auth and Google Identity Service help apps manage user
          identities and account actions.
        </p>
        <ul>
          <li>Login and account linking</li>
          <li>Email verification</li>
          <li>Consent and account actions</li>
        </ul>
        <SpeakerNotes>
          We only need a lightweight understanding of the identity flow to
          follow the case.
        </SpeakerNotes>
      </section>

      <section>
        <h2>Action links</h2>
        <p>
          Many workflows are completed by a user clicking a link in an email.
        </p>
        <ul>
          <li>Link encodes a one-time action token</li>
          <li>UI validates the token and completes the action</li>
          <li>Expectation: only the user triggers it</li>
        </ul>
        <SpeakerNotes>
          The key point: the action is triggered by a link open.
        </SpeakerNotes>
      </section>

      <section>
        <section>
          <h2>Self-hosted UI</h2>
          <p>
            The app hosts its own UI while relying on Firebase/GIS for token
            validation.
          </p>
          <ul>
            <li>Frontend receives a token via URL</li>
            <li>Backend verifies and completes the action</li>
            <li>User expects an explicit click</li>
          </ul>
          <SpeakerNotes>
            The UI is not the identity provider itself; it’s a consumer that
            expects a human user.
          </SpeakerNotes>
        </section>
        <section>
          <h2>Where it gets risky</h2>
          <p>Automated scanners behave like users, but without user intent.</p>
          <ul>
            <li>They open links to check safety</li>
            <li>They can follow redirects and load UIs</li>
            <li>They may trigger state-changing flows</li>
          </ul>
          <SpeakerNotes>
            The UI cannot easily tell scanner vs. user unless it explicitly
            checks.
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;
