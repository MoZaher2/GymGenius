const Welcome = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "440px",
        background: "#ffffff",
        textAlign: "center",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxShadow: "3px 3px 10px red",
        borderRadius: "15px",
      }}
    >
      <h2
        style={{
          color: "var(--second-color)",
          textShadow: "2px 3px 5px red",
          fontSize: "40px",
        }}
      >
        Welcome!
      </h2>
      <p
        style={{
          color: "black",
          maxWidth: "335px",
          lineHeight: "25px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        Thank you for registering on our site. Please go to the app to start
        your journey and do your workout.
      </p>
    </div>
  );
};

export default Welcome;
