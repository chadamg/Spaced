import React from 'react'
import Button from '@material-ui/core/Button';

const Body = () => {
    return(
        <section className='section'>
            <div className='title'>
                <h2>A study method verified by science</h2>
            </div>

            <div class="container">
                <div class="body-text">
                    <p>With our novel spaced repetition approach, you'll be able to recall key facts more effectively Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur ligula eget eros aliquam venenatis a vitae nisi. Nunc fermentum at diam nec laoreet. Maecenas id turpis ut mi imperdiet ultrices eu ac erat. Nunc accumsan condimentum mauris at interdum. Integer commodo ante nibh, id convallis nunc efficitur quis. Sed luctus ligula at nisi iaculis, nec vestibulum lacus facilisis. Vestibulum ac quam lorem.</p>
                    <Button variant="contained" color="primary">Get Started</Button>
                </div>
                <div class="body-image">
                    <img src="images/placeholder.jpg" alt="placeholder image" width="550px" height="100%"></img>
                </div>
            </div>
            <div>
                <div>
                    <div className="title">
                        <h2>Key Features</h2>
                    </div>
                    <div className="key-features-wrapper">
                        <div className="key-features-card">
                            <img className="key-features-img" src="images/Img1.jpg"></img>
                            <h2 className="key-features-h2">Categorise by Subjects</h2>
                            <p className="key-features-p">Categorise cards by subject, mix subjects to create composite study decks.</p>
                        </div>
                        <div className="key-features-card">
                            <img className="key-features-img" src="images/Img2.jpg"></img>
                            <h2 className="key-features-h2">Categorise by Difficulty</h2>
                            <p className="key-features-p">Built-in difficulty system, choose to study by difficulty.</p>
                        </div>
                        <div className="key-features-card">
                            <img className="key-features-img" src="images/Img3.jpg"></img>
                            <h2 className="key-features-h2">Add Cards</h2>
                            <p className="key-features-p">Easily add cards of your own and store it in the database to access later.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="title">
                    <h2>Why use Spaced-Repetition?</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur ligula eget eros aliquam venenatis a vitae nisi. Nunc fermentum at diam nec laoreet. Maecenas id turpis ut mi imperdiet ultrices eu ac erat. Nunc accumsan condimentum mauris at interdum. Integer commodo ante nibh, id convallis nunc efficitur quis. Sed luctus ligula at nisi iaculis, nec vestibulum lacus facilisis. Vestibulum ac quam lorem.</p>
                </div>
            </div>
        </section>
    )
}
export default Body;
