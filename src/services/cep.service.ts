import { Endereco } from './endereco'
import { TipoIntegracao } from './tipo-integracao'
import { OpenCepService } from './open-cep'
import { ViaCepService } from './via-cep'

export class CepService {
	constructor (tipoIntegracao?: TipoIntegracao) {
		switch (tipoIntegracao) {
		case TipoIntegracao.OPEN_CEP:
			return new OpenCepService()
		case TipoIntegracao.VIA_CEP:
		default:
			return new ViaCepService()
		}
	}

	consultar: (cep: string) => Promise<Endereco>
}
