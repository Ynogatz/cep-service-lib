import { AbstractCepService } from '../abstract-cep.service'
import { Endereco } from '../endereco'
import fetch, { Response } from 'node-fetch'
import { OpenCep } from './open-cep'

export class OpenCepService extends AbstractCepService<OpenCep> {
	protected async consultarApi (cep: string): Promise<Endereco> {
		const url: string = 'https://opencep.com/v1/' + cep + '.json'
		const response: Response = await fetch(url)
		const endereco: Endereco = this.converter(await response.json() as unknown as OpenCep)
		return endereco
	}

	protected converter (endereco: OpenCep): Endereco {
		const ret: Endereco = {
			cep: endereco.cep,
			logradouro: endereco.logradouro,
			complemento: endereco.complemento,
			bairro: endereco.bairro,
			cidade: endereco.localidade,
			uf: endereco.uf
		}
		return ret
	}

}
