# SUJESTÃO TABELA DE HONORÁRIOS ADVOCATÍCIOS OAB/MA


## Motivos
É sabido que o advogado deve ter ao seu dispor todos os meios de esclarecimento dos direitos do cliente, bem como de se resguardar de eventuais controvérsias em relação aos honorários advocatícios.

Pensando nisso, é comum que os Contratos de Honorários advocatícios tragam em seu bojo, indicação do serviço a ser desenvolvido, bem como a sua respectiva indicação de valor mínimo previsto na Tabela de Honorários.

Ademais, com a evolução da internet, é primordial que se tenha ferramentas adequadas para se otimizar o exercício da advocacia.

Portanto, para que isto seja alcançado, é necessário implementar uma funcionalidade mínima na Tabela da OAB/MA, quer seja, a criação de "id" em cada elemento da tabela que descreva um serviço. Desta forma, tanto o advogado como o cliente poderão acessar de forma rápida uma URL com acesso direto ao serviço da seguinte forma, vejamos:
```
https://www.oabma.org.br/servicos/tabela-de-honorarios#2-crimes-contra-a-seguranca-nacional
```

As alterações são invisíveis, porém ganha-se muito inclusive com a questão de acessibilidade.

## Get Starting
Uma tabela com mais de 700 linhas daria um trabalho demasiadamente cansativo e passível de erro, desta forma, é necessário executar uma função escrita em javascript, onde o script adicionaria as "ids" em cada linha de tabela.

A equipe de desenvoldedores da OAB/MA não terá dificuldade nenhuma em implementar a funcionalidade, pois basta executar o script no console do navegador, aguardar a conclusão (somente alguns segundos), e por fim, capturar o outerHTML no console do navegador.
