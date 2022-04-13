# Identificador Único de Questões (IUQ)

## Contexto
Com o grande crescimento de avaliações, concursos e provas dos mais diversos formatos e com a alta demanda de questões exclusivas para evitar cópias e questões já utilizadas em outros processos de avaliação anteriores, a proposta é a criação de um sistema que concentre uma base de questões exclusivas cadastradas por professores e outros colaboradores, de modo que seria disponibilizado um serviço para avaliar provas produzidas por outras pessoas/instituições e indicando se existem questões iguais ou similares a outras pré-existentes em nossa base de questões.

## Escopo
O Identificador Único de Questões deve ser capaz de receber e armazenar questões enviadas por professores para uso futuro, como também verificar se já existe no banco de dados alguma questão igual ou bastante semelhante à que o(a) professor(a) está propondo. Se a questão tiver um par igual ou bastante semelhante então ela não deverá ser adicionada no banco de dados. O IUQ também deve ser capaz de ler arquivos pdf de provas antigas e retirar e armazenar questões dessas provas em sua própria base de dados.

## Como testar na sua máquina
Preparamos o seguinte passo-a-passo para você seguir se quiser testar o o sistema em sua própria máquina.

### 1º Passo
Primeiramente é preciso fazer o download das seguintes ferramentas: 
- Visual Studio Code - https://code.visualstudio.com/download
- Visual Studio Community - https://visualstudio.microsoft.com/pt-br/vs/community/ (Fazer as instalações de acordo com a imagem abaixo)

![pass1-img](https://user-images.githubusercontent.com/54213043/163079739-8f6a4539-8741-42e8-ae71-da3942d21970.jpg)

- SQL Server Management Studio - https://docs.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15

### 2º Passo
Criar um banco de dados local. Para isso abra o SQL Server Management Studio, coloque o nome do seu servidor e clique em conectar como mostra a imagem abaixo.
![passo2-img](https://user-images.githubusercontent.com/54213043/163080993-eae0dcb9-b15c-4548-8cbf-21091362dfe0.png)

Caso esteja em dúvida sobre qual é o nome do seu servidor, abra o cmd e digite "sqllocalDB info". Vão aparecer todos os banco de dados locais de sua máquina. Na hora de colocar esse nome no  SQL Server Management Studio, use "(LocalDb\)"como prefixo. Por exemplo, se no cmd o nome da base for "MSSQLLocalBD" então no momento de colocar o nome no SSMS, ponha "(LocalDb)\MSSQLLocalBD".

### 3º Passo
Clonar o repositório no Visual Studio Community

### 4º Passo
Ir em "Abrir Solução" e abrir a solução "DomProject_WebApi.sln"

### 5º Passo
Dentro da solução, procurar o "appsettings.json", expandir (setinha para o lado) o arquivo, abrir o arquivo "appsetting.development" e editar a string "ReleaseConnection" para o nome do seu banco de dados local.

### 6º Passo
Dentro do VS Community, depois de abrir a solução, vá em "Exibir" (topo esquerdo da tela) -> "Outras Janelas" -> "Console Gerenciados de Pacotes" e digitar "update-database"

### 7º Passo
Executar o programa na setinha verde na parte superior da tela. Após isso, irá abrir uma janela do seu navegador com a API Swagger como mostra a imagem abaixo.

![passo7-img](https://user-images.githubusercontent.com/54213043/163082800-c0962465-cd91-47ea-b410-f6644452c7b0.png)

### 8º Passo
Clonar repositório em alguma pasta de sua escolha e abrir com o Visual Studio Code. Abrir um novo terminal e navegar até a pasta "dominios-de-software\dom_project\dom_project_ui" e digitar os seguintes comandos
- "npm install"
- "npm start"

Pronto! Agora você está pronto para testar nosso sistema na sua máquina com seu próprio banco de dados local!

