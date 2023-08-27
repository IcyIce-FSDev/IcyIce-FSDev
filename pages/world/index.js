import worldStyles from "../../styles/world.module.css";
import data from "../../world-data/data.json";
import Image from "next/image";

export default function world() {
  return (
    <div>
      <header className={worldStyles.header}>
        <h2>Where in the world?</h2>
        <p>Dark Mode</p>
      </header>

      <nav className={worldStyles.searchbar}>
        <p>Search Filter</p>
        <p>Region Filter</p>
      </nav>

      <main className={worldStyles.container}>
        {data.map((country) => {
          return (
            <div key={country.alpha2Code} className={worldStyles.card}>
              <Image
                priority
                src={country.flags.svg}
                className={worldStyles.cardimg}
                height={200}
                width={400}
                alt={`Picture of ${country.name} flag`}
              />

              <div className={worldStyles.cardDisc}>
                <h4>{country.name}</h4>
                <p>Populatation: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Captial: {country.capital}</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
