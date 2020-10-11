import React, { Fragment, useState } from 'react'
import AddCategoryApp from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GiftExpertApp = () => {    

    const [categoria, setCategoria] = useState(['Goku']);

    return ( 

        <Fragment>

            <h2>GiftExpertApp</h2> 
            <AddCategoryApp setCategoria = {setCategoria } />
            <hr/>

            <ol>
                {
                    categoria.map( category => 
                             <GifGrid 
                                key = {category}
                                category = {category} />
                    )
                }
            </ol>
        </Fragment>
            
        );
}

export default GiftExpertApp;

