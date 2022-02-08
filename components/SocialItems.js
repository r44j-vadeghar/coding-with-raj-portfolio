function SocialItems() {
  return (
    <div className="flex items-center space-x-3 h-10 opacity-60">
      <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
        <a href="https://www.linkedin.com/in/rajvadeghar2000/" target="_blank">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/linkedin-round.svg"
          />
        </a>
      </div>
      <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
        <a href="https://github.com/RajVadeghar" target="_blank">
          <img loading="lazy" className="headerImage" src="/img/github.svg" />
        </a>
      </div>
      <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
        <a href="#" target="_blank">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/instagram-round.svg"
          />
        </a>
      </div>
      <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
        <a href="https://twitter.com/VadegharRaj" target="_blank">
          <img
            loading="lazy"
            className="headerImage"
            src="/img/twitter-round.svg"
          />
        </a>
      </div>
      <div className="rounded-full hover:scale-125 transition-all cursor-pointer">
        <a href="https://www.facebook.com/raj.vadeghar.3" target="_blank">
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
