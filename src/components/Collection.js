import { useEffect, useState } from "react";
import { useParams,Link,useHistory } from 'react-router-dom';
import Brand from "./Brand";
import MainContext from "../MainContext";
import { useContext } from "react";
import LazyLoad from "react-lazyload";
import Download from "./Download";
import {GrLinkPrevious} from 'react-icons/gr'
import Loader from "./Loader";

function Collection(props) {
    const { slugs } = useParams();
    const history = useHistory();
    const { setSelectedBrands, brands, selectedBrands } = useContext(MainContext);
    useEffect(() => {
        setSelectedBrands(slugs.split(','))
    }, [])
    const clearSelectedBrands = ()=>{
        setSelectedBrands([]);
        history.push('/')
    }
    return (
        <main className='content'>
            <header className='header'>
                
                <Link to="/" onClick={clearSelectedBrands}>
                    <a className="back-btn">
                        <GrLinkPrevious/>
                        All Brands 
                    </a>
                </Link>

                {selectedBrands.length !== 0 && <Download />}
            </header>
            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand =  brands.find(brund => brund.slug === slug)
                    return (

                        <LazyLoad once={true} overflow={true} placeholder={<Loader/>}>
                            <Brand brand={brand} />
                        </LazyLoad>

                    )
                })}
            </section>
        </main>
    )
}

export default Collection