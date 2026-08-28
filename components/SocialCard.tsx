export function SocialCard() {
  return (
    <div
      style={{
        alignItems: "stretch",
        background: "#0b0b0b",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "58px 68px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#b6ff00",
          borderRadius: 999,
          display: "flex",
          height: 360,
          opacity: 0.96,
          position: "absolute",
          right: -70,
          top: -100,
          width: 360,
        }}
      />

      <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
        <div
          style={{
            alignItems: "center",
            background: "#b6ff00",
            borderRadius: 18,
            color: "#0b0b0b",
            display: "flex",
            fontSize: 49,
            fontWeight: 900,
            height: 72,
            justifyContent: "center",
            letterSpacing: -6,
            width: 72,
          }}
        >
          w
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 760 }}>
          wandr
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            color: "#b6ff00",
            display: "flex",
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: 3,
          }}
        >
          DISCOVER · PLAN · REMEMBER
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 720,
            letterSpacing: -4,
            lineHeight: 0.98,
            maxWidth: 890,
          }}
        >
          Find places worth going to.
        </div>
        <div
          style={{
            color: "#c9c9c9",
            display: "flex",
            fontSize: 27,
            lineHeight: 1.3,
          }}
        >
          Travel discovery, shared trip planning and memories in one place.
        </div>
      </div>

      <div style={{ color: "#9b9b9b", display: "flex", fontSize: 20 }}>
        wandr.website
      </div>
    </div>
  );
}
