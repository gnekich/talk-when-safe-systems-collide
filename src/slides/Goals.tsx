import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <>
      <section>
        <h2><a>#</a> goals -i ./prezentacija.pdf</h2>
        <ol>
           <li>Upoznati se sa servisima (GCP Cloud, Firebase, etc.)</li>
          <li>Vidjeti kako bi stvari trebale funkcionirati (according to Google)</li>
          <li>Kako stvari zapravo funkcioniraju</li>
          <li>Definirati uzrok problema, tko je zapravo kriv?</li>
          <li>Pronaći rješenje</li>
          <li>Stvoriti novu zanimljivu klasu napada</li>
          <li>Naučiti svašta nešto novo</li>
        </ol>
        <SpeakerNotes>
          We’ll move chronologically. Each phase has its own lessons.
        </SpeakerNotes>
      </section>

    </>
  );
}

export default Slide;
