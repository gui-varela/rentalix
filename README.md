
# Cadastro de carro

  **RF**
  - [ ] Deve ser possível cadastrar um novo carro.

  **RN**
  - [ ] Não deve ser possível cadastrar um carro com uma placa já existente.
  - [ ] O carro deve ser cadastrado com disponibilidade por padrão.
  - [ ] * O usuário responsável pelo cadastro deve ter perfil administrador.

# Listagem de carros

  **RF**
  - [ ] Deve ser possível listar todos os carros disponíveis.
  - [ ] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
  - [ ] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
  - [ ] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

  **RN**
  - [ ] O usuário não precisa estar logado no sitema para listar os carros.

# Cadastro de especificação no carro

  **RF**
  - [ ] Deve ser possível listar todos os carros disponíveis.
  - [ ] Deve ser possível listar todas as especificações.

  **RN**
  - [ ] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
  - [ ] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
  - [ ] O usuário responsável pelo cadastro deve ter perfil administrador.

# Cadastro de imagens do carro

  **RF**
  - [ ] Deve ser possível cadastrar a imagem do carro.
  - [ ] Deve ser possível listar todos os carros.

  **RNF**
  - [ ] Utilizar multer para upload de arquivos.

  **RN**
  - [ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
  - [ ] O usuário responsável pelo cadastro deve ter perfil de administrador.

# Aluguel de carros

  **RF**
  - [ ] Deve ser possível cadastrar um aluguel.
  - [ ] Deve ser possível listar todos os carros.

  **RN**
  - [ ] O aluguel deve ter duração de pelo menos 24h.
  - [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
  - [ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.


# Legenda
  **RF** => Requisitos funcionais
  **RNF** => Requisitos não funcionais
  **RN** => Regra de negócio