const request = require('request')

function main(params) {
    return new Promise((resolve, reject) => {
        request(`http://viacep.com.br/ws/${params.cep}/json/`, (err, _, body) => {
            if (err) {
                console.error(err)
                reject(err)
            }
            resolve(JSON.parse(body))
        })
    })
}

exports.main = main
