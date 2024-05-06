const getSearchedData = (item: string): Promise<string[]> => {
    const dbData = [
        "school",
        "school bag",
        "school kit",
        "uniform",
        "school uniform",
        "school shoes",
        "trekking shoes",
        "hiking shoes",
        "party shoes",
        "sport shoes",
        "formal shoes"
    ]

    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(dbData.filter(data=> data.includes(item)).slice(0,5))
        }, 1000)
    })
}

export default getSearchedData