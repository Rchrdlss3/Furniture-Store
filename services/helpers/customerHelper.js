const createOrderID = (email) => {
    let output = ''; 
    for (let i = 0; i < email.length; i++) {
        if  (email[i] == '@') {break}
        output += email[i]
    }
    return `${output}-${Date.now()}`
}

module.exports = {createOrderID}