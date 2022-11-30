import { Endereco } from './endereco'
import { CepService } from './cep.service'

export abstract class AbstractCepService<T> implements CepService {
	async consultar (cep: string): Promise<Endereco> {
		if (!cep?.length) {
			return
		}

		if (cep?.length === 9) {
			cep = cep.replace('-', '')
		}

		if (cep?.length !== 8) {
			return
		}

		let ret: Endereco

		try {
			ret = await this.consultarApi(cep)
		} catch (e) {
			console.error('Erro buscando endereço!', e)
		}

		return ret
	}

	protected abstract consultarApi (cep: string): Promise<Endereco>

	protected abstract converter (endereco: T): Endereco
}
