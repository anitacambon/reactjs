/*export const products = [

    {
        nombre: "Lycra Julia Pareja",
        categoria: "indumentaria",
        unidades: 500,
        precio: 5000,
        img: "lycra_julia.jpeg"
    },
    {
        nombre: "Lycra Le Fosse",
        categoria: "indumentaria",
        unidades: 500,
        precio: 5000,
        img: "lycra_lean.jpeg"
    },
    {
        nombre: "Lycra Magna 2020",
        categoria: "indumentaria",
        unidades: 500,
        precio: 4000,
        img: "lycra2020.jpeg"
    },
    {
        nombre: "Musculosa Boxing",
        categoria: "indumentaria",
        unidades: 500,
        precio: 3500,
        img: "musc_box.jpeg"
    },
    {
        nombre: "Parche Magna",
        categoria: "accesorios",
        unidades: 500,
        precio: 1000,
        img: "parche.jpeg"
    },
    {
        nombre: "Kit Kick Boxing",
        categoria: "accesorios",
        unidades: 500,
        precio: 7000,
        img: "kit_kb.jpeg"
    },
    {
        nombre: "Kimono Negro",
        categoria: "indumentaria",
        unidades: 500,
        precio: 20000,
        img: "gi_negro.jpeg"
    },
    {
        nombre: "Kimono Azul",
        categoria: "indumentaria",
        unidades: 500,
        precio: 20000,
        img: "gi_azul.jpeg"
    },
    {
        nombre: "Gorro lana",
        categoria: "accesorios",
        unidades: 500,
        precio: 5000,
        img: "gorro_lana.jpeg"
    },
    {
        nombre: "Evento MMA",
        categoria: "eventos",
        unidades: 500,
        precio: 6000,
        img: "evento_mma.jpeg"
    },
    {
        nombre: "Seminario Leandro",
        categoria: "eventos",
        unidades: 500,
        precio: 2500,
        img: "evento_seminario.jpeg"
    },
    {
        nombre: "Pase 8 clases",
        categoria: "abonos",
        unidades: 500,
        precio: 4500,
        img: "logo.jpeg"
    },
    {
        nombre: "Pase 12 clases",
        categoria: "abonos",
        unidades: 500,
        precio: 6000,
        img: "logo.jpeg"
    },
    {
        nombre: "Pase libre",
        categoria: "abonos",
        unidades: 500,
        precio: 10500,
        img: "logo.jpeg"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((prod) => prod.id === parseInt(id))
            if (product) return resolve(product)
            return reject({ error: 'No encontrado' })
        }, 500)
    })
}

export const getProductByCategoria = (categoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productosCategoria = products.filter((prod) => prod.categoria === categoria)
            if (productosCategoria) return resolve(productosCategoria)
            return reject({ error: 'No encontrado' })

        }, 500)
    })
}*/