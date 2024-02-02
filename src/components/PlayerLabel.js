const PlayerLabel = (props) => {
  const className = "player";
  var class1 = className + " p1";
  var class2 = className + " p2";

  if (props.playerState.player === -1) {
    class1 = class1 + " inactive";
  } else {
    class2 = class2 + " inactive";
  }

  return (
    <>
      <div className="player-container">
        <div className={class1}>
          Player 1 : {props.playerState.player1Score}
        </div>
        <div className={class2}>
          Player 2 : {props.playerState.player2score}
        </div>
      </div>
    </>
  );
};

export default PlayerLabel;
