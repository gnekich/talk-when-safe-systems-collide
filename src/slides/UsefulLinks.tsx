import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <section>
          <h3>Pitanja publike</h3>
          <ol>
            <li>
              Mogu li dodane sigurnosne kontrole uvijek povećati sigurnost, ili
              mogu smanjiti sigurnost?
            </li>
            <li>U složenom sustavu, tko je odgovoran za kvar?</li>
          </ol>
          <SpeakerNotes>
            Ovdje stajemo za raspravu. Neka se ljudi uključe s obje strane.
          </SpeakerNotes>
        </section>
        <section>
          <h3>Model zajedničke odgovornosti</h3>
          <ul>
            <li>Identity provider: sigurne postavke i dokumentacija</li>
            <li>Vendor za sigurnost e-pošte: transparentnost skenera</li>
            <li>Developer aplikacije: prisutnost korisnika i potvrda</li>
            <li>Administratori poduzeća: konfiguracija pravila</li>
          </ul>
          <SpeakerNotes>
            Smatram da je odgovornost zajednička. Najveće koristi dolaze iz
            koordinacije.
          </SpeakerNotes>
        </section>
        <section>
          <h3>Zaključci</h3>
          <ul>
            <li>Predpostavite da će automatizacija kliknuti</li>
            <li>Razdvojite pregled od izvršenja</li>
            <li>Modelirajte prijetnje kroz integracije</li>
            <li>Dokumentirajte sigurno vođenje integracija</li>
          </ul>
          <SpeakerNotes>
            Kratki pregled kako ostaviti publiku s važnim saznanjima.
          </SpeakerNotes>
        </section>
      </section>
    </>
  );
}

export default Slide;
