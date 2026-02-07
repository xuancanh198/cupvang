interface Product {
    name: string
    image: string
    price: string
}

function DetailPage({ product }: { product: Product }) {
    return (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">

                    {/* IMAGE */}
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <img
                            className="w-full"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>

                    {/* INFO */}
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {product.name}
                        </h1>

                        <div className="mt-4">
                            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                                {product.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailPage
