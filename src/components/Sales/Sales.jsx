import "./Style/Sales.css"
import Goods from "../Goods/Goods"
import goods from "../../goods.json"

function Sales() {
    return (
        <section className="Sales">
            <h2 className="Sales__headline">Акції</h2>
            <div className="Sales__container">
                {
                    goods.filter(item => item.sale).map(item => <Goods key={item.title} data={item} />)
                }
            </div>
        </section>
    )
}

export default Sales