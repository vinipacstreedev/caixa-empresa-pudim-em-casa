import { useState } from "react"
import Carrinho from "../../Components/Carrinho";
import api from "../api";

function Product() {

    const [carrinho, setCarrinho] = useState([]);
    const total = carrinho.reduce((acc, item) => acc + item.price, 0);


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
    ];

    function adicionarProduct(product) {
        setCarrinho([...carrinho, product]);
    }

    function removerCarrinho(id) {
        const novoCarrinho = carrinho.filter(item => item.id !== id);
        setCarrinho(novoCarrinho);
    }

    async function finalizarVenda() {
        if (carrinho.length === 0) {
            alert("Adicione pelo menos um produto ao carrinho.");
            return;
        }

        try {
            await api.post("/vendas", {
                total: total
            });

            alert("Venda finalizada e salva com sucesso!");
            setCarrinho([]);

        } catch (error) {
            console.error(error);
            alert("Erro ao finalizar venda.");
        }
    }

    return (



        <div style={{
            padding: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "30px"
        }}
        >
            <div style={{ flex: 1 }}>
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
                            <h2>{product.name}</h2>
                            <p>
                                R$ {product.price}
                            </p>
                            <button onClick={() => adicionarProduct(product)}>
                                Adicionar
                            </button>

                        </div>
                    ))}
                </div>
            </div>

            <Carrinho
                carrinho={carrinho}
                total={total}
                removerCarrinho={removerCarrinho}
                finalizarVenda={finalizarVenda}
            />

        </div>
    )
}

export default Product;