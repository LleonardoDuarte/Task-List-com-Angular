# Informações importantes

- Para o projeto em questão primeiramente foi criado uma pasta module/home que possui um modulo para controlar os componentes.

- Dentro de home foram criadas 2 pastas as quais são: components e pages, na pasta components estão todos os componentes da página e na pasta pages foi criado um componente que ira receber todos os seletores dos componentes.

- Para que funcione temos de verificar se todos os componentes estão importados no module, apos isso deveremos ir no arquivo ap-routing-module e adicionar o caminho inicial que será: const routes: Routes = [{ path: '', component: HomeComponent }]; no caso home component é o nome do componente que está localizado em pages, o mesmo tem que ser importado para que consigamos coloca-lo no app routing, apos isso devemos importar o modulo criadod entro do app modules e coloca-lo nos imports, apartir dai voce ja pode pegar os seletores dos componentes e colocar dentro do componente da sua pasta pages, assim ja pode iniciar o projeto.

- Para facilitar a tipagem e como usaremos a mesma tipagem em locais diferentes, para facilitar foi criado iuma interface atraves do comando ng g interface com nome Tasklists, o mesmo foi colocado dentro da pasta home e criado uma pasta models, importante lembrar que no arquivo interface a primeira letra sempre é maiuscula!

- Na nossa checkedbox a troca de false para tru na nossa classe checked está sendo feita automaticamente pelo ngModel sem que seja necessario criar um if ou função para isso.
