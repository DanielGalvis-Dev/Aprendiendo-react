import { useState } from "react";
import "./TwitterFollowCard.css";

export function TwitterFollowCard({ name, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "siguiendo" : "seguir";
  const ButtonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoName">{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={ButtonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
