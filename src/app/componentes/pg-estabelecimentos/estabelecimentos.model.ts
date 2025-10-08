export interface Servico {
  nome: string;
  preco: number;
}

export interface Estabelecimentos {
  id: number;
  nome: string;
  endereco: string;
  imagemUrl: string;
  avaliacao: number;
  servicos: Servico[];
}