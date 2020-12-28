import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import numeral from 'numeral';
import './Home.css'
import { Link } from 'react-router-dom';
import inr from '../images/inr.svg'
import inrSmall from '../images/inr-small.svg'
import { sortByPrice } from "../store/reducers/ProductsReducers";
import { MenuItem, Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function Home() {
    const dispatch = useDispatch()
    function sortByInput(e) {
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')) {
            dispatch(sortByPrice({ direction }))
        }
    }

    const { products } = useSelector(state => state.ProductsReducer)
    // console.log(store)
    return (
        <div className='container'>
            <div className="select">
                <FormControl className='app_dropdown'>
                    <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                    <Select variant="outlined" onChange={e => {
                        sortByInput(e)
                    }}>
                        <MenuItem value='price_asc'>Price - Lowest to Highest</MenuItem>
                        <MenuItem value='price_desc'>Price - Highest to Lowest</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='product_list'>
                {products.map(product => (
                    <Link to={`/details/${product.id}`} key={product.id}>
                        <div className='product_box'>
                            <div className='product_list_info'>
                                <div className='product_img'>
                                    <img src={`${product.image}`} alt={product.name} />
                                </div>
                                <div className='product_name'>
                                    {product.name}
                                </div>
                                <div className='row_info'>
                                    <div className='product_price'>
                                        <span className='price_strike'>
                                            <span className='price_tag'><img src={inrSmall} alt="INR" /></span>
                                            {numeral(product.price).format("0,0")}</span>
                                        <span className='price_dis'>{product.discount}%</span>
                                    </div>
                                    <div className='product_discount'>
                                        <img src={inr} alt="INR" />
                                        {numeral(product.discountPrice).format("0,0")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home
