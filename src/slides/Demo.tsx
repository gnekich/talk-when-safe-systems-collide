import FirebaseAuthDemo from "../components/FirebaseAuthDemo";
import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h2>PoC: registracija, login i logout</h2>
          <p>Prikaz kako skener e-pošte može automatski dovršiti potvrdu korisnika.</p>
        </section>

        <section>
          <h2>Redoslijed</h2>
          <ol>
            <li>Korisnik se registrira / prijavi</li>
            <li>Poslan je e-mail za potvrdu</li>
            <li>Skenirajuci link otvara URL bez korisničke interakcije</li>
            <li>U sučelju se prikazuje status verifikacije i JWT token</li>
          </ol>
          <SpeakerNotes>
            Korisnik ne mora kliknuti ni potvrditi ništa. Samo otvaranje linka može
            dovesti do toga da se korisnički status pretvori u potvrđen.
          </SpeakerNotes>
        </section>

        <section>
          <h2>Demo</h2>
          <FirebaseAuthDemo />
          <SpeakerNotes>
            Ovdje demonstriramo stvarni tok registracije, prijave i logouta, te
            prikazujemo status verifikacije i JWT token na desnoj strani.
          </SpeakerNotes>
        </section>

        <section>
          <h2>Zašto je ovo opasno?</h2>
          <ul>
            <li>“Otvaranje linka” se tretira kao potvrda namjere</li>
            <li>Autonomni skeneri ne predstavljaju stvarnog korisnika</li>
            <li>Tokeni i status verifikacije se mogu koristiti bez eksplicitnog klika</li>
          </ul>
          <SpeakerNotes>
            Ovo je ključna lekcija: sigurnosni mehanizmi moraju razlikovati
            automatizaciju od stvarne korisničke namjere.
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;
