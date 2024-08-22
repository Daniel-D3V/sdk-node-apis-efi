const EfiPay = require('sdk-node-apis-efi')
const options = require('../../credentials')

let params = {
	id: 0,
}

const efipay = new EfiPay(options)

// O método cancelCarnet indica os campos que devem ser enviados e que serão retornados
efipay.cancelCarnet(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
