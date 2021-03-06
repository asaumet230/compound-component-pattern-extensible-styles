
// Components:
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';

// styles:
import '../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {


    return (
        <div >
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-bold" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} className="bg-dark text-white">
                    <ProductImage className="custom-image" />
                    <ProductTitle
                        title='Café Para Luchy'
                        className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{
                    backgroundColor: 'brown'
                }}>
                    <ProductImage style={{
                        borderRadius: '50px'
                    }} />
                    <ProductTitle style={{
                        color: 'white'
                    }} />
                    <ProductButtons style={{
                        border: '2px solid white'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;