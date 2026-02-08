import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h3>Audience questions</h3>
          <ol>
            <li>
              Do added security controls always increase security, or can they
              reduce it?
            </li>
            <li>In a composed system, who is responsible for the failure?</li>
          </ol>
          <SpeakerNotes>
            Pause here for discussion. Let people argue both sides.
          </SpeakerNotes>
        </section>
        <section>
          <h3>Shared responsibility model</h3>
          <ul>
            <li>Identity provider: safe defaults & documentation</li>
            <li>Email security vendor: scanner transparency</li>
            <li>App developer: user presence & confirmation</li>
            <li>Enterprise admin: policy configuration</li>
          </ul>
          <SpeakerNotes>
            I argue responsibility is shared. The biggest wins come from
            coordination.
          </SpeakerNotes>
        </section>
        <section>
          <h3>Takeaways</h3>
          <ul>
            <li>Assume automation will click</li>
            <li>Separate viewing from committing</li>
            <li>Threat-model across integrations</li>
            <li>Document safe integration guidance</li>
          </ul>
          <SpeakerNotes>
            A short summary to leave the audience with.
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;
