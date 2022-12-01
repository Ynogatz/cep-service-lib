Exemplo simples de uso
//teste
--

import { CepService, TipoIntegracao } from 'cep-service'

const cepService: CepService = new CepService(TipoIntegracao.OPEN_CEP) const response = await cepService.consultar('04843-475')

--

O retorno esperado é:

{

"cep": "04843-475",

"logradouro": "Viela São Paulo",

"complemento": "",

"bairro": "Parque São José",

"cidade": "São Paulo",

"uf": "SP"

}

