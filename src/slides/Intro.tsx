import SpeakerNotes from "../components/SpeakerNotes";
import PasswordGlitchTypeEffectText from "../components/CyberpunkPasswordEffect";

function Slide() {
  return (
    <section data-transition="slide">
       <section>
        <h3>
          <a>
            <PasswordGlitchTypeEffectText reanimateEveryMs={7000} toReanimateChildren={'Welcome to'}>
               0x2BAD
            </PasswordGlitchTypeEffectText>
          </a>
        </h3>
        <h3>
          When Safe Systems{" "}
          <a>
            <PasswordGlitchTypeEffectText reanimateEveryMs={5000} toReanimateChildren={'Break'}>
              Collide
            </PasswordGlitchTypeEffectText>
          </a>
        </h3>
        <h4>Firebase Auth Bypass Via Email Scanners</h4>
        <div style={{
          marginBottom: "150px"
        }}></div>

        <SpeakerNotes>
          Pozdrav svima, dobrodošli na prezentaciju "When Safe Systems Break".



          Pripremio sam ovu prezentaciju kako bih podijelio jednu svoju priču iz svijeta sigurnosti.
          Ova priča uključuje zanimljive sigurnosne propuste i lekcije koje sam naučio.
          
          - Ništa posebno.
          - Dolazim iz web svijeta i web exploitacije

          - Nadam se da će vam se svidjeti i biti zanimljivo.
        </SpeakerNotes>
      </section>
      <section>
        <h3>
          <a>
            <PasswordGlitchTypeEffectText>
               Zahvala
            </PasswordGlitchTypeEffectText>
          </a>
        </h3>
        <h4>
          Antoniu{' '}
          <a
            style={{
              transform: 'rotate(15deg)',
              display: 'inline-block',
              transition: 'transform 0.25s ease',
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'rotate(15deg)';
            }}
          >
            Z
          </a>
          ekiću na organizaciji ovog eventa. ... i za veliku pomoć pri pregovorima oko iznosa nagrade od strane Google Cloud VRP team-a.
        </h4>
        <div style={{
          marginBottom: "150px"
        }}></div>

        <SpeakerNotes>
          Pa prije nego što krenemo, želim se zahvaliti svima koji su pomogli u organizaciji ovog eventa i podržali ovu prezentaciju.

          Pogotovo prijatelju Antoniu Zekiću na organizaciji ovog eventa, i za pomoć pri pregovorima oko iznosa nagrade od strane Google Cloud VRP. (Više o tome u samoj prezentaciji) i ono bitno,
          da nije bilo nejgove incijative ove prezentacije najvjerojatnije ne bi ni bilo.

          Also možda skužite jedan mali easter egg što se dogodi ako rotirate slovo "Z".
          Zaručnica mi kaže da ko Halland hodam svijetom nediagnosticiran.
        </SpeakerNotes>
      </section>
      {/* <section>
        <h2>
          <a>Dva</a> pitanja na koja ćemo probati odgovoriti
        </h2>
        <ol>
          <li>
            Da li dodatne sigurnosne kontrole <em>uvijek</em> povećavaju sigurnost?
          </li>
          <li>Kada sustavi međusobno komuniciraju, tko snosi rizik?</li>
        </ol>
        <SpeakerNotes>
          Ovdje ćemo pokušati odgovoriti na dva ključna pitanja vezana uz sigurnost sustava i interakciju između njih.
        </SpeakerNotes>
      </section> */}
    </section>
  );
}

export default Slide;
