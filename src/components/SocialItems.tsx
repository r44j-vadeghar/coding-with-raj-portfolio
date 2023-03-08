function SocialItems() {
  return (
    <div className="flex h-10 items-center space-x-3 opacity-60">
      <div className="cursor-pointer rounded-full transition-all hover:scale-125">
        <a
          href="https://www.linkedin.com/in/rajvadeghar2000/"
          target="_blank"
          rel="noreferrer">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/linkedin-round.svg"
          />
        </a>
      </div>
      <div className="cursor-pointer rounded-full transition-all hover:scale-125">
        <a
          href="https://github.com/RajVadeghar"
          target="_blank"
          rel="noreferrer">
          <img loading="lazy" className="headerImage" src="/img/github.svg" />
        </a>
      </div>
      <div className="cursor-pointer rounded-full transition-all hover:scale-125">
        <a
          href="https://gitlab.com/rajvadeghar"
          target="_blank"
          rel="noreferrer">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/gitlab-rounded.png"
          />
        </a>
      </div>
      <div className="cursor-pointer rounded-full transition-all hover:scale-125">
        <a
          href="https://www.instagram.com/raj_vadeghar/"
          target="_blank"
          rel="noreferrer">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/instagram-round.svg"
          />
        </a>
      </div>
      <div className="cursor-pointer rounded-full transition-all hover:scale-125">
        <a
          href="https://twitter.com/VadegharRaj"
          target="_blank"
          rel="noreferrer">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/twitter-round.svg"
          />
        </a>
      </div>
      <div className="cursor-pointer rounded-full transition-all hover:scale-125">
        <a
          href="https://www.facebook.com/raj.vadeghar.3"
          target="_blank"
          rel="noreferrer">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/facebook-round.svg"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialItems;
