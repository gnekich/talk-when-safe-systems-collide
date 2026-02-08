import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <h3>Timeline</h3>
        <ol>
          <li>Notice the unexpected behavior</li>
          <li>Reproduce in a safe environment</li>
          <li>Assess impact scope</li>
          <li>Report and coordinate a fix</li>
        </ol>
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
