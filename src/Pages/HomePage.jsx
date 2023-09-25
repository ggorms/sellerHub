import background from "../assets/sneakers.jpeg";

function HomePage() {
  return (
    <div
      className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat bg-none"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="min-h-screen font-serif"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <h1 className="pt-24 text-7xl text-center text-white">
          Welcome to Seller's Hub!
        </h1>
        <h6 className="text-center text-white pt-5">
          Your Product Management Provider
        </h6>
        <p className="text-white pt-12 text-center w-3/5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          iusto quasi nobis id, dignissimos dolore culpa magni alias. Animi
          reprehenderit quos alias a nulla doloremque quas, similique obcaecati
          neque doloribus? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Esse ipsum animi sapiente recusandae impedit asperiores quo
          ducimus soluta voluptate! Autem incidunt iste recusandae harum aliquid
          optio laudantium. Laborum, repudiandae ducimus!
        </p>
        <p className="text-white text-center mx-auto w-4/5 pt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          exercitationem eos placeat eligendi animi recusandae iusto a ratione
          quis? Ea aliquam error unde pariatur earum suscipit expedita ducimus
          accusamus ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odit, modi? Adipisci amet autem perspiciatis, eius deserunt enim
          ut? Illum minus repudiandae ullam nemo saepe ipsum! Similique, magni
          assumenda! Ipsum, esse?
        </p>
        <p className="text-white text-center mx-auto w-3/5 py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit
          necessitatibus optio similique est aliquam minus architecto earum quis
          minima eius mollitia nemo ullam incidunt quaerat officia corrupti,
          explicabo excepturi. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Error animi ipsa veritatis consequatur iusto omnis
          recusandae corrupti itaque, delectus eum dolor nobis temporibus alias.
          Laudantium ea cupiditate et rem tempore? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nulla quod enim voluptas rem voluptates
          debitis asperiores odio fugit, ipsum atque doloremque impedit placeat
          eaque, distinctio sed. Exercitationem asperiores quis pariatur?
        </p>
      </div>
    </div>
  );
}

export default HomePage;
