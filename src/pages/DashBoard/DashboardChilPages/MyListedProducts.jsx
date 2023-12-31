import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import DashboardProductCard from '../DashboardComponents/DashboardProductCard';
import { Helmet } from 'react-helmet';

const MyListedProducts = () => {

    const { user } = useContext(AuthContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`https://cam-r-server.vercel.app/products/uid/${user?.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }, [user?.uid, products])


    const handleRefresh = (id) => {
        const refreshedProducts = products.filter(product => product._id !== id)
        setProducts(refreshedProducts)
    }



    return (
        <div className="overflow-y-auto py-1 space-y-10 px-7 h-[100vh]">
            <Helmet>
                <meta charSet="utf-8" />
                <title>CamR || My Listed Products</title>
            </Helmet>

            {
                products?.length <= 0 ?


                    <h3 className="text-3xl font-secondary font-semibold text-white">No Product Found</h3>


                    :



                    <div>
                        {
                            products.map((product, idx) =>
                                <DashboardProductCard key={idx} product={product} handleRefresh={handleRefresh}></DashboardProductCard>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyListedProducts;