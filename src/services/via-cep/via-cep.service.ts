import { AbstractCepService } from '../abstract-cep.service'
import { Endereco } from '../endereco'
import { ViaCep } from './via-cep'
import fetch, { Response } from 'node-fetch'

export class ViaCepService extends AbstractCepService<ViaCep> {
	protected async consultarApi (cep: string): Promise<Endereco> {
		const url: string = 'https://viacep.com.br/ws/' + cep + '/json/'
		const response: Response = await fetch(url)
		const endereco: Endereco = this.converter(await response.json() as unknown as ViaCep)
		return endereco
	}

	protected converter (cep: ViaCep): Endereco {
		if (!cep?.cep) {
			return
		}
		const ret: Endereco = {
			cep: cep.cep,
			logradouro: cep.logradouro,
			complemento: cep.complemento,
			bairro: cep.bairro,
			cidade: cep.localidade,
			uf: cep.uf
		}
		return ret
	}
}
