import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Card, Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import ProductListing from "./products-listing";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(product);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                setError(`failed to fetch product: ${error.message}`);
                setLoading(false);
            }

        };
        if (id) {
            FetchProduct();
        }
    }, [id]);

    if (loading) return <Spinner animation="border" className="m-4" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    
          
          
    

      
  );
}
     
export default ProductDetails;