import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h2>Walkthrough (high-level)</h2>
          <p>No exploit details — just the sequence of events.</p>
        </section>
        <section>
          <h2>Sequence</h2>
          <ol>
            <li>System sends an action email</li>
            <li>Scanner opens the link for safety</li>
            <li>Self-hosted UI validates the token</li>
            <li>Action completes without user click</li>
          </ol>
          <SpeakerNotes>
            Keep this simple. No payloads or exploitation steps.
          </SpeakerNotes>
        </section>
        <section>
          <h2>Decision points</h2>
          <ul>
            <li>Should “open” be enough to “commit”?</li>
            <li>Should we require a second step?</li>
            <li>How do we detect automation?</li>
          </ul>
          <SpeakerNotes>
            This is where design choices turn into security outcomes.
          </SpeakerNotes>
        </section>
        <section>
          <h2>Safer patterns</h2>
          <ul>
            <li>Landing page → explicit confirmation</li>
            <li>Short-lived tokens + user presence checks</li>
            <li>Token use bound to session, not just URL</li>
          </ul>
          <SpeakerNotes>
            These reduce accidental completion by scanners.
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;
