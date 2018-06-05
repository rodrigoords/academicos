#include <stdio.h>
#include <stdlib.h>
/***************************************************************************/
//                             ESTRUTURAS                                  //
/***************************************************************************/
const int FALSE = 0;
const int TRUE = 1;
struct elemento{
    int valor;
    struct elemento *proximo;
};
typedef struct elemento Elemento;
struct pilha{
    Elemento *elemento;
};
typedef struct pilha Pilha;

/***************************************************************************/
//                             FUNÇÕES                                     //
/***************************************************************************/
Pilha *cria(void){
    Pilha *pilha = (Pilha *)malloc(sizeof(Pilha));
    pilha->elemento = NULL;
    return pilha;
}
// Função para inserir a pilha no inicio
Elemento *insere(Elemento *elemento, int valor){
    Elemento *p = (Elemento *)malloc(sizeof(Elemento));
    p->valor = valor;
    p->proximo = elemento;
    return p;
}
// Funcao auxiliar: retira do inicio da pilha
Elemento *deleta(Elemento *elemento){
    Elemento *p = elemento->proximo;
    free(elemento);
    return p;
}
// Funcao auxiliar q verifica se a pilha esta vazia
int vazia(Pilha *p){
    return (p->elemento == NULL);
}
// Insercao na pilha;
void push(Pilha *p, int v){
    p->elemento = insere(p->elemento, v);
}
// Funcao q remove da pilha
int pop(Pilha *p)
{
    if (vazia(p)){
        printf("Pilha vazia.\n");
        exit(1); /* aborta o programa */
    }
    int v;
    v = p->elemento->valor;
    p->elemento = deleta(p->elemento);
    return v;
}
//Libera espaço utilizado pela pilha
void libera(Pilha *pilha){
    Elemento *atual = pilha->elemento;
    while (atual != NULL){
        Elemento *proximo = atual->proximo;
        free(atual);
        atual = proximo;
    }
    free(pilha);
}

/***************************************************************************/
//                             VALIDAÇÃO                                   //
/***************************************************************************/
int verificaValores(int qtdElementos, Pilha *pilha){
    // De acordo com a regra apresentada { 01^m0^n1^m | n,m > 0 } temos que
    // a pilha deve ter como primeiro elmento de entrada o valor 0, seguindo 
    // de um ou mais numeros uns, um ou mais zeros e por ultimo ter inserido
    // a quantidade exata de numeros uns já inseridos anteriormente.
    int quantidadeM = 0, quantidadeN = 0, valido = FALSE, continua = TRUE, dado;
    
    //Verifica se o top da existe ao menos 1 numero um, caso exista conta a quantidade utilizando o indice m
    while (pilha->elemento->valor == 1){
        quantidadeM++;
        qtdElementos--;
        dado = pop(pilha);
    }

    if (quantidadeM == 0){
        continua = FALSE;
    }

    //Verifica se existe ao menos um numero zero.
    while (pilha->elemento->valor == 0 & continua == TRUE){
        quantidadeN++;
        qtdElementos--;
        if (qtdElementos > 0){
            dado = pop(pilha);
        }
    }

    while ((pilha->elemento->valor == 1) && continua == TRUE){
        quantidadeM--;
        qtdElementos--;
        if (qtdElementos > 0){
            dado = pop(pilha);
        }
        else{
            break;
        }
    }

    if (qtdElementos == 1){
        //Verifica se o primeiro numero da pilha é igual a zero
        dado = pop(pilha);
        if (dado != 0){
            continua = FALSE;
        }
    }
    else{
        continua = FALSE;
    }

    if ((quantidadeM == 0) && (continua == TRUE) && (quantidadeN > 0)){
        valido = TRUE;
    }

    return valido;
}

void assertValor(char * cenario, int esperado, int atual){
    if(esperado == atual) printf("\n\nCenario: %s \n Sucesso!\n\n", cenario);
    else printf("\n\nCenario: %s \n Falhou!\n\n", cenario);

    printf("********************************************************\n\n");
}

void printPilha(Pilha *pilha){
    printf("\nRepresentação Pilha:");
    printf("\n|–––––––––––––|");
    Elemento *atual = pilha->elemento;
    while (atual != NULL){
        Elemento *proximo = atual->proximo;
        printf("\n|      %d      |", atual->valor);
        atual = proximo;
    }
    printf("\n|_____________|\n");
}

void testes(){
    printf("********************************************************\n");
    printf("Realizando testes automáticos\n");
    printf("********************************************************\n");

    Pilha *pilha = cria();
    char * cenario;
    
    printf("input: 0 1 0 1");
    cenario = "input: 0 1 0 1 - deve retornoar true";

    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 1);

    printPilha(pilha);

    assertValor(cenario, TRUE, verificaValores(4, pilha));
    libera(pilha);

    printf("input: 0 1 0 0 1");
    cenario = "input: 0 1 0 0 1 - deve retornoar true";
    pilha = cria();
    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 0);
    push(pilha, 1);
  
    printPilha(pilha);

    assertValor(cenario, TRUE, verificaValores(5, pilha));
    libera(pilha);

    printf("input: 1 1 0 0 1");
    cenario = "input: 1 1 0 0 1 - deve retornoar false";
    pilha = cria();
    push(pilha, 1);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 0);
    push(pilha, 1);
    
    printPilha(pilha);

    assertValor(cenario, FALSE, verificaValores(5, pilha));
    libera(pilha);

    printf("input: 0 1 0 0 1 1");
    cenario = "input: 0 1 0 0 1 1 - deve retornoar false";
    pilha = cria();
    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 1);
    
    printPilha(pilha);

    assertValor(cenario, FALSE, verificaValores(6, pilha));
    libera(pilha);

    printf("input: 0 1 0 0 1 1 0 0");
    cenario = "input: 0 1 0 0 1 1 0 0 - deve retornoar false";
    pilha = cria();
    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 0);
    
    printPilha(pilha);

    assertValor(cenario, FALSE, verificaValores(8, pilha));
    libera(pilha);

    printf("input: 0 1 0 0");
    cenario = "input: 0 1 0 0 - deve retornoar false";
    pilha = cria();
    push(pilha, 0);
    push(pilha, 1);
    push(pilha, 0);
    push(pilha, 0);
    
    printPilha(pilha);

    assertValor(cenario, FALSE, verificaValores(4, pilha));
    libera(pilha);

    printf("input: 0 0 0 0");
    cenario = "input: 0 0 0 0 - deve retornoar false";
    pilha = cria();
    push(pilha, 0);
    push(pilha, 0);
    push(pilha, 0);
    push(pilha, 0);
    
    printPilha(pilha);

    assertValor(cenario, FALSE, verificaValores(4, pilha));
    libera(pilha);

    printf("********************************************************\n");
    printf("Fim dos testes automáticos\n");
    printf("********************************************************\n");
}

/***************************************************************************/
//                             MAIN                                        //
/***************************************************************************/

int main()
{
    int pertence;
    int tamanho;
    // Cria a pilha vazia
    Pilha *pilha = cria();

    testes();

    printf("\n\nO sistema realizou acima alguns testes automáticos para verificar a lógica aplicada.\nContinue caso deseje realizar seus próprios testes.");
    // Carrega a pilha
    printf("\n\nInsira o tamanho da pilha:\n");
    scanf("%d", &tamanho);

    printf("Insira os valores:\n");
    int valorDigitado;
    for (int i = 0; i < tamanho; i++)
    {
        scanf("%d", &valorDigitado);
        push(pilha, valorDigitado);
    }
    //valida cadeia recebida
    pertence = verificaValores(tamanho, pilha);
    // Verifica a resposta da verificação e decide o resultado final
    if (pertence == TRUE)
        printf("\n\n Pertence a linguagem \\o/ \n");
    else
        printf("\n\n Nao pertence a linguagem =( \n");

    libera(pilha);
    return 0;
}