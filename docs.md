FORMAT: 1A
HOST: http://api.boraajudar.org/v1

# BoraAjudarAPI

Documentação da API Rest do projeto Bora Ajudar (incubado pelo Software do Bem).

# Group API

## Sobre [/]

Aqui podemos descrever detalhes que são comuns a todos os serviços como formatos, headers, tipos de erros, etc

# Group Users

## Usuários [/users]

### Criar um novo usuário [POST]

+ Request Criar um Usuário

    + Headers

            Accept: application/json
            Content-Type: application/json
    + Attributes (User)

+ Response 201 (application/json)
    + Attributes (Created)

### Listar usuários [GET]

+ Request Listar usuários

    + Headers

            Accept: application/json
            Content-Type: application/json
            X-Access-Token: AccessToken
    + Attributes (User)

+ Response 200 (application/json)
    + Attributes (array[Message])

+ Response 404 (application/json)
    + Attributes (Error)


## Usuário específico [/users/{id_user}]

+ Parameters
    + id_user: 1 (string, required) - ID do usuário

### Ver usuário [GET]

+ Response 200 (application/json)
    + Attributes (User)

+ Response 404 (application/json)
    + Attributes (Error)


### Excluir usuário [DELETE]

+ Response 200 (application/json)
    + Attributes (Id)

+ Response 404 (application/json)
    + Attributes (Error)


### Alterar usuário [PUT]

+ Request Alterar um usuário

    + Headers

            Accept: application/json
            Content-Type: application/json
    + Attributes (User)

+ Response 200 (application/json)
    + Attributes (Created)

+ Response 400 (application/json)
    + Attributes (Error)

# Data Structures

## Created (object)
+ id (number) - Id gerado

## Id (object)
+ id (number) - Id a ser processado

## Error (object)
+ code: 400 (number) - Status code
+ message (string) - Mensagem do status
+ description (string) - Descrição do status


## Multi (object)
+ id (number) - Código da entidade
+ code: 200 (number) - Status code
+ message (string) - Descrição do status


## User (object)
+ _id (string) - ID do usuário
+ name (string) - Nome do usuário
+ email (string) - E-mail do usuário
+ role (string) - Papéis
+ token (string) - Token do usuário conectado