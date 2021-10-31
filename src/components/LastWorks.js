import "../styles/LastWorks.css";
import Card from "./Card";
import myUnsplashImg from "../assets/latest_project/my_unsplash.png";
import streetFighterImg from "../assets/latest_project/street_fighter_2.jpg";
import ciphatronImg from "../assets/latest_project/ciphatron.png";

const LastWorks = () => {
  return (
    <div className="LastWorks">
      <h2>Latest Works</h2>
      <Card>
        <div className="card-img-container">
          <img src={myUnsplashImg} alt="my-unsplash fullstack project" />
        </div>
        <div className="card-content">
          <h3>My Unsplash</h3>
          <p>
            Fullstack submition app to{" "}
            <a href="https://devchallenges.io/">devChallenges.io</a>
          </p>
          <a href="https://github.com/leopnt/my_unsplash">View project &gt;</a>
        </div>
      </Card>
      <Card className="card-reversed">
        <div className="card-img-container">
          <img src={streetFighterImg} alt="street fighter 2 game project" />
        </div>
        <div className="card-content">
          <h3>Street Fighter 2</h3>
          <p>
            Submition to the RetroJam 2021 on{" "}
            <a href="https://itch.io/">itch.io</a>
          </p>
          <a href="https://leopnt.itch.io/street-club-2">View project &gt;</a>
        </div>
      </Card>
      <Card className="card-profile-img">
        <div className="card-img-container">
          <img src={ciphatronImg} alt="my-unsplash fullstack project" />
        </div>
        <div className="card-content">
          <h3>Ciphatron</h3>
          <p>Inovative mobile app that generates safe passwords from quotes</p>
          <a href="https://play.google.com/store/apps/details?id=com.leopnt.ciphatron">
            View project &gt;
          </a>
        </div>
      </Card>
    </div>
  );
};

export default LastWorks;
