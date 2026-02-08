import SpeakerNotes from "../components/SpeakerNotes";
import PasswordGlitchTypeEffectText from "../components/CyberpunkPasswordEffect";

function Slide() {
  return (
    <section data-transition="slide">
      <section>
        <h3>
          When Security Measures{" "}
          <a>
            <PasswordGlitchTypeEffectText>
              Backfire
            </PasswordGlitchTypeEffectText>
          </a>
        </h3>
        <h4>The Pitfalls of Combining Safe Systems</h4>

        <SpeakerNotes>
          Welcome everyone. Today presentation is about how two “safe” systems
          combined into an unsafe outcome.
          <br />
          We will walk through the story, identify the assumptions that broke,
          and end with practical design lessons.
        </SpeakerNotes>
      </section>
      <section>
        <h2>
          <a>Two</a> questions we should think about
        </h2>
        <ol>
          <li>
            Do extra security controls <em>always</em> increase security?
          </li>
          <li>When systems interact, who owns the risk?</li>
        </ol>
        <SpeakerNotes>
          I want a show of hands for both questions. Keep your answers in mind
          as we go through the case.
        </SpeakerNotes>
      </section>
    </section>
  );
}

export default Slide;
