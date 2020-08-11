export const reverse = (para) => {
    let isError = false
    let isFinish = false
    const tempArr = []

    // check para type is it object
    if (para && Object.prototype.toString.call(para) === '[object Object]') {
        let tempObj = para

        do {
            // check value type is it object
            if (Object.prototype.toString.call(tempObj) === '[object Object]') {
                const keys = Object.keys(tempObj)
                // check object key number
                if (keys.length === 1) {
                    tempObj = tempObj[keys[0]]
                    tempArr.push(keys[0])
                } else {
                    isError = true
                }
            } else if (tempObj) {
                tempArr.push(tempObj.toString())
                isFinish = true
            } else {
                isError = true
            }
        } while (!isError && !isFinish)
    }

    if (isFinish) {
        return convert(tempArr)
    }
    return {}
}

// array to object
const convert = (arrPara) => {
    const lens = arrPara.length
    let result

    if (lens === 2) {
        return { [arrPara[1]]: arrPara[0] }
    }

    result = arrPara[0]

    for (let i = 1; i < lens; i += 1) {
        result = { [arrPara[i]]: result }
    }

    return result
}
