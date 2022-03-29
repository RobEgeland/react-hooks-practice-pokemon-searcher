import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, fSprite, bSprite}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    if(isClicked === false) {
      setIsClicked(true)
    }else {
      setIsClicked(false)
    }
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={isClicked ? bSprite : fSprite } alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
