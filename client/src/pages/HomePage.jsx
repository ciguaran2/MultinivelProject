import  Dropdown  from '../components/Dropdown'

function HomePage(){

    const items = [
        {
          slug: "/add-product/",
          anchor: "Agregar un Producto"
        },
        {
          slug: "/products",
          anchor: "Ver Productos"
        },
        {
          slug: "/add-lead/",
          anchor: "Agregar Lider"
        },
        {
          slug: "/leads/",
          anchor: "Ver Lideres"
        },
        {
          slug: "/add-artisan/",
          anchor: "Agregar Artesano"
        },
        {
          slug: "/artisans/",
          anchor: "Ver Artesanos"
        }
      ]

    return (
        
        <div className="HomePage">
        <Dropdown dropdownTitle="Menú Principal" items={items} />
      </div>
        
    )
}

export default HomePage