import './styles.css';

export default function Home() {
    const container = document.querySelector('#content');

    const info = document.createElement('div');
    info.id = "info";

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = "Liberté";
    const infoText = document.createElement('p');
    infoText.textContent = "Hace un poco más de 6 meses que nació Liberté, de manera espontánea y a pulmón. Trabajamos fuerte y con amor desde que todo empezó y así seguiremos. HOY nace una nueva etapa: @liberte.gastrobar abre sus puertas de noche, de miércoles a viernes, para recibirl@s a la hora de la cena ♨️ Agradecidos y orgullosos porque nuestra casa crece cada día más 🖤 Gracias a tod@s por el aguante 🤙 📍Sarmiento 505, pasate!"

    fieldset.appendChild(legend);
    fieldset.appendChild(infoText);

    info.appendChild(fieldset);

    const banner = document.createElement('div');
    banner.id = "image";

    const image = new Image(); // Create a new Image object
    image.src = require('../src/images/306791088_3198909510375666_4634034502690286416_n.jpeg');
    image.alt = "Image of Liberté restaurant"; 

    banner.appendChild(image);

    container.appendChild(info);
    container.appendChild(banner);

    return container;
}