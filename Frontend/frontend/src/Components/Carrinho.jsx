function Carrinho({ carrinho, total }) {

    return (
        <div
            style={{
                width: "300px",
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px"
            }}
            >
            
            <h2>Carrinho</h2>

            {carrinho.map(item => (
               <p key={item.id}>
                  {item.name} - R$ {item.price}   
               </p> 
            ))
            }
            <h3>
                Total: R$ {total}
            </h3>

            <button>
                Finalizar Venda
            </button>
        </div>
    )        

}

export default Carrinho;