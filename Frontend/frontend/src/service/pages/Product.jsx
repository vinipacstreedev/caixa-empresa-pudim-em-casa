function Product(){

    const product = [
        {
            id: 1,
            name: "Pudim Tradicional",
            price: 8
        },
        {
            id: 2,
            name: "Pudim de Doce de Leite",
            price: 10
        },
        {
            id: 3,
            name: "Pudim de Leite Ninho",
            price: 15
        }
    ]

    return(
        <div style={{ padding: "30px"}}>
            <h1>Pudim Caixa 🍮</h1>
            <p>Sistema de Vendas</p>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "30px"
                }}
            >
                {product.map(product => (
                    <div
                        key={product.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "20px",
                            borderRadius: "10px",
                            width: "220px"
                        }}

                    >
                        <h2>{product.price}</h2>
                        <p>
                            R$ {product.price}
                        </p>
                        <button>
                            Adicionar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product