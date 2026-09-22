import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <h2>Firebase i GIS: kratki pregled</h2>
        <p>
          Firebase Auth i Google Identity Service pomažu aplikacijama upravljati
          identitetima korisnika i akcijama na računu.
        </p>
        <ul>
          <li>Prijava i povezivanje računa</li>
          <li>Verifikacija e-pošte</li>
          <li>Pristanak i akcije na računu</li>
        </ul>
        <SpeakerNotes>
          Dovoljno nam je osnovno razumijevanje identitetnog toka da bismo
          pratili slučaj.
        </SpeakerNotes>
      </section>

      <section>
        <h2>Akcijski linkovi</h2>
        <p>
          Mnogi obrasci završavaju kada korisnik klikne link u e-pošti.
        </p>
        <ul>
          <li>Link sadrži jedinstveni token za jednu akciju</li>
          <li>UI validira token i dovršava akciju</li>
          <li>Očekivanje: akciju pokreće samo korisnik</li>
        </ul>
        <SpeakerNotes>
          Ključna stvar: akcija se pokreće otvaranjem linka.
        </SpeakerNotes>
      </section>

      <section>
        <section>
          <h2>Self-hosted UI</h2>
          <p>
            Aplikacija hosta vlastito sučelje, dok se Firebase/GIS koriste za
            validaciju tokena.
          </p>
          <ul>
            <li>Frontend prima token preko URL-a</li>
            <li>Backend verificira i završava akciju</li>
            <li>Korisnik očekuje eksplicitni klik</li>
          </ul>
          <SpeakerNotes>
            UI nije sam identitetni pružatelj; to je konzument koji očekuje
            ljudskog korisnika.
          </SpeakerNotes>
        </section>
        <section>
          <h2>Gdje postaje opasno</h2>
          <p>Automatizirani skeneri ponašaju se kao korisnici, ali bez namjere.</p>
          <ul>
            <li>Otvaraju linkove kako bi provjerili sigurnost</li>
            <li>Mogu pratiti redirecte i učitavati sučelja</li>
            <li>Mogu pokrenuti tokove koji mijenjaju stanje</li>
          </ul>
          <SpeakerNotes>
            UI teško razlikuje skener od korisnika osim ako to eksplicitno
            provjeri.
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;
