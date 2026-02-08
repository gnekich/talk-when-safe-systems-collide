function Slide() {
  return (
    <>
      <section>
        <section>
          <h2>The flow that failed</h2>
          <ol>
            <li>User receives a verification/consent email</li>
            <li>O365 security scanner pre-opens the link</li>
            <li>Firebase/GIS self-hosted UI validates the token</li>
            <li>Action completes without user intent</li>
          </ol>
        </section>
        <section>
          <h2>Why scanners open links</h2>
          <ul>
            <li>Detect phishing and malware</li>
            <li>Follow redirects to check final destination</li>
            <li>Render the page to evaluate content</li>
          </ul>
        </section>
        <section>
          <h2>Where security backfired</h2>
          <p>
            The scanner behaved like a trusted user. The system treated “open
            link” as “user consent.”
          </p>
        </section>
        <section>
          <h2>Impact (high-level)</h2>
          <ul>
            <li>Potential unintended account action completion</li>
            <li>
              Risk concentrated in enterprise domains with scanning enabled
            </li>
            <li>Attack requires sending a link to the target mailbox</li>
          </ul>
        </section>
        <section>
          <h2>Signals and telemetry</h2>
          <ul>
            <li>Requests coming from scanner IP ranges</li>
            <li>Unusual user-agent patterns</li>
            <li>Action completion without interactive session</li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default Slide;
