import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section data-transition="slide">
        <h3>Root causes</h3>
        <ul>
          <li>Action links were safe to open by design</li>
          <li>GET request triggered a state-changing action</li>
          <li>Scanner traffic was indistinguishable from users</li>
          <li>Cross-system threat model gap</li>
        </ul>
        <SpeakerNotes>
          The issue is not one bug; it’s a set of assumptions across layers.
        </SpeakerNotes>
      </section>
      <section data-transition="slide">
        <h3>Mitigations</h3>
        <ul>
          <li>Use POST for state changes</li>
          <li>Add explicit user confirmation step</li>
          <li>Bind action to user session or device</li>
          <li>Detect scanners and require user interaction</li>
        </ul>
        <SpeakerNotes>
          This is the practical “what you can change in a week” list.
        </SpeakerNotes>
      </section>
      <section data-transition="slide">
        <h3>Design principles</h3>
        <ul>
          <li>Assume scanners will open links</li>
          <li>Separate “view” from “commit” actions</li>
          <li>Prefer idempotent, safe GETs</li>
          <li>Threat-model across vendor boundaries</li>
        </ul>
        <SpeakerNotes>
          These principles generalize beyond this case study.
        </SpeakerNotes>
      </section>
      <section data-transition="slide">
        <h3>Trade-offs</h3>
        <ul>
          <li>Friction vs. security</li>
          <li>Link scanning vs. user privacy</li>
          <li>Fast UX vs. explicit consent</li>
        </ul>
        <SpeakerNotes>
          Every mitigation has a cost. The goal is a deliberate choice, not an
          accidental one.
        </SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;
