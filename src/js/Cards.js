class Cards{
    constructor(){

    }
    calculoScroll(){
        const posicao = document.getElementById('section-tabelas').getBoundingClientRect()['y'];
        console.log(posicao);
        if(posicao <= 1000){
            
        }
    }
}

export { Cards }