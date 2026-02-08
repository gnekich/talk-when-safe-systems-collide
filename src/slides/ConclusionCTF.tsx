import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <h2>Conclusion</h2>
        <p>
          Secure systems can become insecure when combined without explicit
          interaction design.
        </p>
        <ul>
          <li>Design for scanners, not just humans</li>
          <li>Require explicit intent for sensitive actions</li>
          <li>Coordinate across vendors</li>
        </ul>
        <SpeakerNotes>
          Bring it back to the central theme: composition risk.
        </SpeakerNotes>
      </section>
      <section>
        <h1>Thank you</h1>
        <p>Questions?</p>
        <SpeakerNotes>
          Invite Q&A and revisit the two opening questions.
        </SpeakerNotes>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Happy to discuss after the talk.</p>
        <SpeakerNotes>
          Optional closing slide to keep on screen while chatting.
        </SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;
