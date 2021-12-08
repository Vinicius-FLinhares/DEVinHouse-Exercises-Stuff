class Plantas{
    constructor(name,hidratacao){
        this.nome = name;
        this.hidratacao = hidratacao; 
        this.alive = (hidratacao >= 100) || (hidratacao <= 0) ? false : true;
    }

    waterPlant(QttAgua){
        if(this.hidratacao > 100 || (this.hidratacao + QttAgua) > 100){
            this.alive = false;
        }
        this.hidratacao += QttAgua;
    }
}
class Veiculo{
    #nome
    #ano
    #tipo
    #km
    constructor(nome,ano,tipo){
        this.#nome = nome;
        this.#ano = ano;
        this.#tipo = tipo;
        this.#km = 1000;
    }

    get nome(){
        return this.#nome;
    }
    get ano(){
        return this.#ano;
    }
    get tipo(){
        return this.#tipo;
    }
    get km(){
        return this.#km;
    }
    set nome(newNome){
         this.#nome = newNome;
    }

    toJSON(){
        return{
            nome: this.#nome,
            ano: this.#ano,
            tipo: this.#tipo,
            km: this.#km
        }
    }
}
class Animal{
    constructor(name){
        this.name = name;
    }
}
class Dog extends Animal{
        constructor(name, raca){
            super(name); 
            this.raca = raca;
        }
}
class Livros{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.reservado = false;
    }
        emprestaLivro(){
        if(this.reservado == true){
            return "livro já reservado";
        } else{
            this.reservado = true;
            return "livro emprestado";
        }
    }

        devolveLivro() {
        if(this.reservado = false){
            return "não pode devolver algo que não tem"
        }else{
            this.reservado = false;
            return "livro devolvido"
        }
    }

        static OrdenaLivros(books){
         const sortedBooksArray =  books.sort((a,b)=>{
            if(a.ano != b.ano)return a.ano-b.ano;
        });
        return sortedBooksArray;
        }

}
    class HQs extends Livros{
        constructor(nome,autor,ano,ilustrador){
            super(nome,autor,ano)
            this.ilustrador = ilustrador;
        }
}

    const livro1 = new HQs("book1","pelancas1",1999,"geraldo1");
    const livro2 = new HQs("book2","pelancas2",1998,"geraldo2");
    const livro3 = new HQs("book3","pelancas3",1997,"geraldo3");
    const HQQs = [livro1,livro2,livro3];
    console.log(Livros.OrdenaLivros(HQQs));