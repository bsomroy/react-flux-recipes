import Ingredients from './Ingredients'
import Instructions from './Instructions'

const Recipie = ({ name, ingredients, steps}) => (
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        <Ingredients list={ingredients} />
        <Instructions steps={steps} />
    </section>
);

module.exports = Recipie;