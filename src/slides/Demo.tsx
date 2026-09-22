import FirebaseAuthDemo from "../components/FirebaseAuthDemo";
import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h2>PoC: registracija, login i logout</h2>
          <p>Hack the planet!</p>
        </section>

      <section>
          <h2>Demo Gods have mercy!</h2>
        </section>

        <section>
          <h3>Demo</h3>
          <FirebaseAuthDemo />
          <SpeakerNotes>
            Ovdje demonstriramo stvarni tok registracije, prijave i logouta, te
            prikazujemo status verifikacije i JWT token na desnoj strani.
          </SpeakerNotes>
        </section>

      </section>
    </>
  );
}

export default Slide;
