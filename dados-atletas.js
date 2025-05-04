class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
    // cálculo da categoria 
    calculaCategoria() {
            if (this.idade >= 9 && this.idade <= 11) {
                return this.categoria = "Infantil";
            } if (this.idade >= 12 && this.idade <= 13) {
                return this.categoria = "Juvenil";
            } if (this.idade >= 14 && this.idade <= 15) {
                return this.categoria = "Intermediário";
            } if (this.idade >= 16 && this.idade <= 30) {
                return this.categoria = "Adulto";
            } else {
                return this.categoria = "Sem categoria";
            }
        }
    // cálculo do IMC
    calculaIMC() {
        return this.imc = this.peso / (this.altura * this.altura);
    }
    // cálculo da média dos valores válidos (excluindo o menor e maior número da matriz)
    calculaMediaValida() {
        let soma = 0
        this.notas.sort(function(a, b) {
            return a - b
        });
        this.notasValidas = this.notas.slice(1, -1);
        this.notasValidas.forEach(function(nota) {
            soma = soma + nota
        }); 
        this.media = soma / this.notasValidas.length;
    }
    // chamamento do nome
    obtemNomeAtleta() {
        return this.nome;
    }
    // chamamento da idade
    obtemIdadeAtleta() {
        return this.idade;
    }
    // chamamento do peso
    obtemPesoAtleta() {
        return this.peso;
    }
    // chamamento das notas
    obtemNotasAtleta() {
        return this.notas;
    }
    obtemCategoria() {
        return atleta.calculaCategoria;
    }
    obtemIMC() {
        return atleta.calculaIMC;
    }
    obtemMediaValida() {
        return atleta.calculaMediaValida;
    }
}
  
  const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

  // chamada dos métodos para o atleta 1
  atleta.calculaCategoria();
  atleta.calculaIMC();
  atleta.calculaMediaValida();
  atleta.obtemNomeAtleta();
  atleta.obtemIdadeAtleta();
  atleta.obtemPesoAtleta();
  atleta.obtemNotasAtleta();
  atleta.obtemCategoria();
  atleta.obtemIMC();
  atleta.obtemMediaValida();
    
  console.log(atleta);

  let atleta_2 = new Atleta("Regina Dantas", 12, 45, 1.50, [8.5, 9.43, 10, 10, 6.99]);

// chamada dos métodos para a atleta 2

  atleta_2.calculaCategoria();
  atleta_2.calculaIMC();
  atleta_2.calculaMediaValida();
  atleta_2.obtemNomeAtleta();
  atleta_2.obtemIdadeAtleta();
  atleta_2.obtemPesoAtleta();
  atleta_2.obtemNotasAtleta();
  atleta_2.obtemCategoria();
  atleta_2.obtemIMC();
  atleta_2.obtemMediaValida();

  console.log(atleta_2)