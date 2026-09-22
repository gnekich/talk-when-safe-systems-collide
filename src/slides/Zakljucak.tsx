import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import SpeakerNotes from "../components/SpeakerNotes";

const SITE_URL = window.location.href;

function Slide() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [qrValue, setQrValue] = useState(`${SITE_URL}?ts=${Date.now()}`);

  useEffect(() => {
    const refreshQr = () => {
      const nextTimestamp = Date.now();
      setTimestamp(nextTimestamp);
      setQrValue(`${SITE_URL}?ts=${nextTimestamp}`);
    };

    refreshQr();
    const intervalId = window.setInterval(refreshQr, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  const formattedTimestamp = new Date(timestamp).toLocaleTimeString("hr-HR", {
    hour12: false,
  });

  return (
    <>
      <section>
        <h2>Zaključak</h2>
        <p>Kombinacija više sigurnih sustava može rezultirati nesigurnim ponašanjem.</p>
        <ul>
          <li>Mailboxes are alive, and they can act autonomously!</li>
          <li>Design for scanners, agents, not just humans!</li>
          <li>Require explicit intent for sensitive actions!</li>
          <li>Coordinate across vendors!</li>
          <li>Don't trust big tech blindly!</li>
          <li>Don't do magic side effects!</li>
          <li>Don't be evil!</li>
        </ul>
        <SpeakerNotes>
          Zaključak je da sigurni sustavi mogu postati nesigurni kada se
          kombiniraju. Ključne smjernice su: - Dizajnirajte za skenere, agente,
          ne samo za ljude! - Za osjetljive akcije zahtijevajte eksplicitnu
          namjeru! - Koordinirajte se među dobavljačima!
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

        <div style={{ paddingTop: "24px" }}>
          <QRCodeSVG
            value={qrValue}
            size={220}
            bgColor="#ffffff"
            fgColor="#111111"
            includeMargin={true}
            marginSize={1}
          />
        </div>

        <SpeakerNotes>
          Optional closing slide to keep on screen while chatting. QR is link to
          this presentation.
        </SpeakerNotes>
      </section>
    </>
  );
}

export default Slide;
