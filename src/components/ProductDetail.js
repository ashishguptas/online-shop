import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import numeral from 'numeral';
import './ProductDetail.css';
import Button from '@material-ui/core/Button';
import inr from '../images/inr.svg'
import inrSmall from '../images/inr-small.svg'

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.ProductsReducer)
    // console.log(product)

    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])

    return (
        <div className='product_details'>
            <div className='container'>
                <div className='go_back'>
                    <Link to='/'>
                        <Button className='add_btn' variant="contained" color="primary">
                            Go To Home
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="detail_img">
                <img src={`${product.image}`} alt={product.name} />
            </div>
            <div className="detail_info">
                <div className='detail_name'>
                    {product.name}
                </div>
                <div className='row_info'>
                    <div className='product_price'>

                        <span className='price_strike'>
                            <span className='price_tag'><img src={inrSmall} alt="INR" /></span>
                            {numeral(product.price).format("0,0")}
                        </span>
                        <span className='price_dis'>{product.discount}%</span>
                    </div>
                    <div className='product_discount'>
                        <img src={inr} alt="INR" />
                        {numeral(product.discountPrice).format("0,0")}
                    </div>
                </div>
                <div className='product_desc'>
                    <h3>Description</h3>
                    <p>{product.desc}</p>
                </div>
                <Button className='add_btn' variant="contained" color="primary">
                    ADD TO CART
              </Button>
            </div>
        </div>
    )
}

export default ProductDetail
