// Definindo a classe abstrata
class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    emitirSom() {
      console.log`(${this.nome} emitiu um som)`;
    }
  }
  
  // Definindo classes que herdam de Animal
  class Cachorro extends Animal {
    constructor(nome, idade, raca) {
      super(nome, idade);
      this.raca = raca;
    }
  
    latir() {
      console.log`(${this.nome} (${this.raca}) está latindo)`;
    }
  }
  
  class Gato extends Animal {
    constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
    }
  
    miar() {
      console.log`(${this.nome} (${this.cor}) está miando)`;
    }
  }
  
  // Criando instâncias de objetos
  const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
  const gato1 = new Gato('Miau', 3, 'Preto');
  const cachorro2 = new Cachorro('Toby', 2, 'Vira-lata');
  
  // Testando os métodos
  cachorro1.emitirSom(); // Saída: Rex emitiu um som.
  cachorro1.latir(); // Saída: Rex (Labrador) está latindo.
  
  gato1.emitirSom(); // Saída: Miau emitiu um som.
  gato1.miar(); // Saída: Miau (Preto) está miando.
  
  cachorro2.emitirSom(); // Saída: Toby emitiu um som.
  cachorro2.latir(); // Saída: Toby (Vira-lata) está latindo.