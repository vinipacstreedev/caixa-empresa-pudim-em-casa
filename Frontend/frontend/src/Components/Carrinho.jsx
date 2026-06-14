function Carrinho({ carrinho, total, removerCarrinho, finalizarVenda }) {
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

      {carrinho.length === 0 && <p>Nenhum produto adicionado</p>}

      {carrinho.map(item => (
        <div key={item.id}>
          <p>{item.name} - R$ {item.price}</p>

          <button onClick={() => removerCarrinho(item.id)}>
            Remover
          </button>
        </div>
      ))}

      <h3>Total: R$ {total}</h3>

      <button onClick={finalizarVenda}>
        Finalizar Venda
      </button>
    </div>
  )
}

export default Carrinho;