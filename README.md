# Roaw

Um pacote de ferramentas voltado a desenvolvimento e suporte de sistemas. As ferramentas conseguem reescrever, modificar, criar, recursos de html, javascript, requests, entre várias outras coisas.

## Instalação

Seria ideal ter o git instalado, ir no diretório onde quer baixar a extensão, e executar o seguinte comando:

```bash
git clone https://github.com/vsmsystem/Roaw.git
```

Mas caso não tenha o git instalado ou não consiga instalar no computador em questão, pode clicar no botãozinho verde ali em cima e clicar em "Download ZIP".

Após baixar (se baixou como zip precisa descompactar), vá até a página de extensões do chrome, clique no botão "Modo do Desenvolvedor", depois clique em "Carregar sem Compactação", e navegue até a pasta roawChrome, esta é a pasta que deve ser carregada.

## Modo de Usar

### Http

Essa classe serve pra fazer requisições http usando fetch, a vantagem dela é usar um arquivo de configuração que relaciona url de serviços com tokens, podendo instanciar varios objetos de serviços diferentes, com tokens diferentes, e usar todos ao mesmo tempo.

```js
const meuServico = new Http("nomeServico");
```

```js
await meuServico.get("usuarios/listar");
```

```js
await meuServico.post("usuarios/cadastrar",{
  "nome":"Valdecir",
  "sobrenome":"Merli"
});
```

Para funcionar bem, é ideal criar a configuração no localStorage, basta abrir o popup da extensão, rolar até a caixa de configuração do Http e colar as configurações.

Abaixo tem um exemplo para que possa edittar e inserir lá:



```json
{
  "autoStart": ["all"],
  "services": {
    "gitlab": {
      "url": "http://git.etc.com.br/api/v4",
      "token": {
        "name": "@gitlab-Token",
        "value": { "PRIVATE-TOKEN": "?example?" }
      }
    },
    "vsm": {
      "url": "https://api.vsmsystem.com",
      "token": {
        "name": "@vsm-Token",
        "value": { "Authorization": "?example?" }
      }
    },
    "yplus": {
      "url": "https://yplus.vsmsystem.com/api",
      "token": {
        "name": "@yplus-Token",
        "prefix": "Bearer"
      }
    }
  }
}
```
Também é possivel instanciar em vazio, para quando não existe configurações no localstorage, isso faz com a classe use a uwl do dominio aberto na aba atual do chrome como baseUrl e faz as request para o proprio dominio
```js
const meuServico = new Http();
await meuServico.get("usuarios/");
```

É possivel ainda no metodo da request fornecer o dominio inteuiro, e isso fará a request para esse dominio em questão, por exemplo:
```js
await meuServico.get("https://www.vsmsystem.com/usuarios");
//porém se for entre dominios diferente e o servidor do dominio de destino nao tiver configurado cors, vai acontecer o erro padrão de cors, mas a request funciona
```

Ainda não é a melhor forma (longe disso), mas está em constante evolução.

```
=)
```

Tem muita coisa a respeito disso a ser dita, e está tudo em um período bem inicial, cheio de bagunças e sem muito tempo pra evoluir a ideia, mas em breve vou criar materiais sobre os recursos, e como usar certas coisas... por hora tenho ensinado pessoalmente ou online as pessoas que tem usado em projetos

```json
{
  "github": "vsmsystem",
  "all": {},
  "default": {
    "vsmbar": true,
    "inject": ["default.js"]
  },
  "www.vsmsystem.com": {
    "vsmbar": true,
    "inject": ["default.js"]
  },
  "localhost:8006": "default",
  "localhost:9001": "default",
  "www.etc.com.br": "default"
}
```


```js
req = await fetch("backend/meuendpoint.php", {
  "body": new FormDataJson({
    "id_usuario":"99999999",
    "nome":"fulano",
    "sobrenome":"detal"
}),
  "method": "POST",
  "credentials": "include"
});

console.warn(await req.json())
```
### Rascunho para mais tarde:
- eventListeners
- speech
- mutationObserver
- selectOptions
- getElementsByText
- forIn
- fetch
- HTML DOM Parser
- CSS Real Time edit
- Network Debugger
- var_dump
- console.toast
- injections
- tokens/serviços
- http
- vsmBar
- roawBox
- documentação frontend
- documentação backend
- documentação banco de dados

[vsmsystem.com](https://www.vsmsystem.com/)
