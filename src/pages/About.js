import recipeQR from "./recipe-qr-code.png"

const About = () => {
    return (
        <article>
            <header className="w3-container w3-amber">
                <h2>About</h2>
            </header>
            <section className="w3-container w3-row-padding">
                <section className="w3-half">
                    <p>This website was created by Dylan Pruitt.</p>
                    <p>A lot of recipe websites are crammed with ads, and aren't mobile friendly.</p>
                    <p>I created this recipe book so that people can just get the bare essentials when looking for recipes.</p>
                </section>
                <section className="w3-half w3-display-container">
                    <figure className="w3-display-topmiddle">
                        <img src={recipeQR} className="w3-image" alt="QR code for mobile"></img>
                        <figcaption className="">Use this QR code to visit the website on your phone.</figcaption>
                    </figure>
                </section>
            </section>
        </article>
    );
}

export default About;