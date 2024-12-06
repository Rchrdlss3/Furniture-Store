export const fetchAllFurniture = async () => {
    try {
        const data = fetch ('http://localhost:3000/furniture/get')
        .then((res) => res.json())
        .then((data) => {return data})
        return await data
    } catch (e) {
        console.log(e)
    }

}

export const fetchSpecifiedFurniture = async (id) => {
    try {
        const data = fetch(`http://localhost:3000/furniture/get?id=${id}`)
        .then((res) => res.json())
        .then((data) => {return data})
        return await data
    } catch (e) {
        console.log(e)
    }
}