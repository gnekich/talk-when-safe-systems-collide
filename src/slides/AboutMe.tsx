import SpeakerNotes from "../components/SpeakerNotes";

function Slide() {
  return (
    <section>
      <h2>
        <a>$</a> whoami
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            textAlign: "left",
          }}
        >
          <img
            src="assets/me.png"
            alt="Gordan Nekić"
            style={{
              width: "350px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
        </div>
        <div style={{ textAlign: "left", maxWidth: "75%" }}>
          <p>
            <strong>Name:</strong> Gordan Nekić
          </p>
          <p>
            <strong>Role:</strong> Lead Engineer @ Elixirr Digital
          </p>
          <p>
            <strong>Description:</strong> Programmer, security enthusiast,
            advocate for a free and secure internet. I ❤️ Open Source.
          </p>
          <p>
            <strong>Online Presence:</strong>
          </p>
          <ul style={{ padding: "0" }}>
            <li>
              <a href="https://bsky.app/profile/gordan.neki.ch" target="_blank">
                Blue Sky: @gordan.neki.ch
              </a>
            </li>
            <li>
              <a href="https://github.com/gnekich" target="_blank">
                GitHub: @gnekich
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gnekich" target="_blank">
                LinkedIn: @gnekich
              </a>
            </li>
            <li>
              <a href="https://bugcrowd.com/gnekich" target="_blank">
                Bugcrowd: @gnekich
              </a>
            </li>
            <li>
              <a href="https://gordan.neki.ch" target="_blank">
                Web
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SpeakerNotes>
        A little about me, my name is Gordan Nekić, and I work as a Lead
        Engineer at Elixirr Digital.
        <br />
        <br />
        I am a programmer with a great passion for computer security and an
        advocate for a free and secure internet.
        <br />
        <br />
        I am a big fan of Open Source and believe in sharing knowledge and
        collaborating on projects.
        <br />
        <br />
        On the screen, you can see several links where you can find me online,
        including Blue Sky, GitHub, LinkedIn, Bugcrowd, and my personal website.
        <br />
        <br />
        If you have any questions or want to learn more about me, feel free to
        reach out through these platforms.
      </SpeakerNotes>
    </section>
  );
}

export default Slide;
