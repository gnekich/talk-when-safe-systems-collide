import SpeakerNotes from "../components/SpeakerNotes";
import PasswordGlitchTypeEffectText from "../components/CyberpunkPasswordEffect";

function Slide() {
  return (
    <section data-transition="slide">
       <section>
        <h3>
          <a>
            <PasswordGlitchTypeEffectText>
               0x2BAD
            </PasswordGlitchTypeEffectText>
          </a>
        </h3>
        <h3>
          When Safe Systems{" "}
          <a>
            <PasswordGlitchTypeEffectText>
              Collide
            </PasswordGlitchTypeEffectText>
          </a>
        </h3>
        <h4>Firebase Auth Bypass Via Email Scanners</h4>
        <div style={{
          marginBottom: "150px"
        }}></div>

        <SpeakerNotes>
          In this section, we will explore a specific case where Firebase Auth can be bypassed using email scanners.
          We will examine how the interaction between seemingly secure systems can lead to unexpected vulnerabilities.
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
        <h4>Antoniu <a style={{
          transform: 'rotate(20deg)',
          display: 'inline-block'
        }}>Z</a>ekiću na organizaciji ovog eventa, te pomoć pri pregovorima oko iznosa nagrade od strane Cloud VDP Google-a.</h4>
        <div style={{
          marginBottom: "150px"
        }}></div>

        <SpeakerNotes>
          Prvo bi se zahvalio prijatelju Antoniu Zekiću na organizaciji ovog eventa, te pomoć pri pregovorima oko iznosa nagrade od strane Cloud VDP Google-a. (Više o tome u nastavku) i ono bitno, da nije bilo nejgove incijative ove prezentacije najvjerojatnije ne bi ni bilo.
        </SpeakerNotes>
      </section>
      <section>
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
          
        </SpeakerNotes>
      </section>
    </section>
  );
}

export default Slide;
