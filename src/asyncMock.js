

const products = [

    {
        id: 1001,
        nombre: "Lycra Julia Pareja",
        categoria: "indumentaria",
        talle: "S",
        unidades: 500,
        precio: 5000,
        img: "lycra_julia.jpeg"
    },
    {
        id: 1002,
        nombre: "Lycra Julia Pareja",
        categoria: "indumentaria",
        talle: "M",
        unidades: 500,
        precio: 5000,
        img: "lycra_julia.jpeg"
    },
    {
        id: 1003,
        nombre: "Lycra Julia Pareja",
        categoria: "indumentaria",
        talle: "L",
        unidades: 500,
        precio: 5000,
        img: "lycra_julia.jpeg"
    },
    {
        id: 2001,
        nombre: "Lycra Le Fosse",
        categoria: "indumentaria",
        talle: "S",
        unidades: 500,
        precio: 5000,
        img: "lycra_lean.jpeg"
    },
    {
        id: 2002,
        nombre: "Lycra Le Fosse",
        categoria: "indumentaria",
        talle: "M",
        unidades: 500,
        precio: 5000,
        img: "lycra_lean.jpeg"
    },
    {
        id: 2003,
        nombre: "Lycra Le Fosse",
        categoria: "indumentaria",
        talle: "L",
        unidades: 500,
        precio: 5000,
        img: "lycra_lean.jpeg"
    },
    {
        id: 3001,
        nombre: "Lycra Magna 2020",
        categoria: "indumentaria",
        talle: "S",
        unidades: 500,
        precio: 4000,
        img: "lycra2020.jpeg"
    },
    {
        id: 3002,
        nombre: "Lycra Magna 2020",
        categoria: "indumentaria",
        talle: "M",
        unidades: 500,
        precio: 4000,
        img: "lycra2020.jpeg"
    },
    {
        id: 3003,
        nombre: "Lycra Magna 2020",
        categoria: "indumentaria",
        talle: "L",
        unidades: 500,
        precio: 4000,
        img: "lycra2020.jpeg"
    },
    {
        id: 4001,
        nombre: "Musculosa Boxing",
        categoria: "indumentaria",
        talle: "S",
        unidades: 500,
        precio: 3500,
        img: "musc_box.jpeg"
    },
    {
        id: 4002,
        nombre: "Musculosa Boxing",
        categoria: "indumentaria",
        talle: "M",
        unidades: 500,
        precio: 3500,
        img: "musc_box.jpeg"
    },
    {
        id: 4003,
        nombre: "Musculosa Boxing",
        categoria: "indumentaria",
        talle: "L",
        unidades: 500,
        precio: 3500,
        img: "musc_box.jpeg"
    },
    {
        id: 5001,
        nombre: "Parche Magna",
        categoria: "accesorios",
        unidades: 500,
        precio: 1000,
        img: "parche.jpeg"
    },
    {
        id: 6001,
        nombre: "Kit Kick Boxing",
        categoria: "accesorios",
        unidades: 500,
        precio: 7000,
        img: "kit_kb.jpeg"
    },
    {
        id: 7001,
        nombre: "Kimono Negro",
        categoria: "indumentaria",
        talle: "A0",
        unidades: 500,
        precio: 20000,
        img: "gi_negro.jpeg"
    },
    {
        id: 7002,
        nombre: "Kimono Negro",
        categoria: "indumentaria",
        talle: "A1",
        unidades: 500,
        precio: 20000,
        img: "gi_negro.jpeg"
    },
    {
        id: 7003,
        nombre: "Kimono Negro",
        categoria: "indumentaria",
        talle: "A2",
        unidades: 500,
        precio: 20000,
        img: "gi_negro.jpeg"
    },
    {
        id: 7004,
        nombre: "Kimono Negro",
        categoria: "indumentaria",
        talle: "A3",
        unidades: 500,
        precio: 20000,
        img: "gi_negro.jpeg"
    },
    {
        id: 8001,
        nombre: "Kimono Azul",
        categoria: "indumentaria",
        talle: "A0",
        unidades: 500,
        precio: 20000,
        img: "gi_azul.jpeg"
    },
    {
        id: 8002,
        nombre: "Kimono Azul",
        categoria: "indumentaria",
        talle: "A1",
        unidades: 500,
        precio: 20000,
        img: "gi_azul.jpeg"
    },
    {
        id: 8003,
        nombre: "Kimono Azul",
        categoria: "indumentaria",
        talle: "A2",
        unidades: 500,
        precio: 20000,
        img: "gi_azul.jpeg"
    },
    {
        id: 8004,
        nombre: "Kimono Azul",
        categoria: "indumentaria",
        talle: "A3",
        unidades: 500,
        precio: 20000,
        img: "gi_azul.jpeg"
    },
    {
        id: 9501,
        nombre: "Gorro lana",
        categoria: "accesorios",
        unidades: 500,
        precio: 5000,
        img: "gorro_lana.jpeg"
    },
    {
        id: 11001,
        nombre: "Evento MMA",
        categoria: "eventos",
        unidades: 500,
        precio: 6000,
        img: "evento_mma.jpeg"
    },
    {
        id: 11000,
        nombre: "Seminario Leandro",
        categoria: "eventos",
        unidades: 500,
        precio: 2500,
        img: "evento_seminario.jpeg"
    },
    {
        id: 12002,
        nombre: "Pase 8 clases",
        categoria: "abonos",
        unidades: 500,
        precio: 4500,
        img: "logo.jpeg"
    },
    {
        id: 12003,
        nombre: "Pase 12 clases",
        categoria: "abonos",
        unidades: 500,
        precio: 6000,
        img: "logo.jpeg"
    },
    {
        id: 12004,
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
            return reject({ error: 'No encontrado'})
            
        }, 500)
    })
}