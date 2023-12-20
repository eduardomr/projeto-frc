# Projeto Final - Servidor de Diálogos com Websocket e Apache

## Descrição do Projeto

Este repositório contém a implementação de um servidor de diálogos que utiliza as tecnologias recentes em protocolos de camada de aplicação, como HTTP, HTTPS, e websockets. A aplicação é estruturada como um modelo cliente/servidor, onde o servidor Apache gerencia as conexões HTTP e HTTPS, e um servidor de websocket, desenvolvido em Flask, facilita as interações assíncronas entre os clientes, além de um sistema de autentificação com login e senha utilizando um banco de dados postgresql. Os clientes são implementados como aplicações web, utilizando o framework Angular, e permitem a interação com o servidor por meio de um chat websocket.

O projeto visa proporcionar uma compreensão prática da arquitetura de redes, destacando a implementação de um servidor, a configuração eficiente do Apache para suportar conexões seguras, e a integração eficaz do websocket para possibilitar diálogos interativos.

## Configurações do Ambiente

### Servidor Apache

O servidor Apache foi configurado para escutar na porta 80 para conexões HTTP e na porta 443 para conexões HTTPS. Certificados digitais foram gerados e instalados para habilitar a criptografia nas comunicações.

### Servidor Websocket em Flask

O servidor de websocket foi implementado utilizando o framework Flask e configurado para uma porta específica, permitindo a comunicação assíncrona entre clientes e servidor.

### Servidor DNS BIND9

Um servidor DNS local foi configurado usando o BIND9 para associar um nome DNS ao endereço IP da Máquina Virtual. Isso facilita o acesso à aplicação por meio de um nome de domínio significativo.

### Máquina Virtual Ubuntu 22.04

Todo o ambiente foi configurado em uma Máquina Virtual com sistema operacional Ubuntu 22.04, proporcionando um ambiente padronizado e controlado para o desenvolvimento e testes da aplicação.

### Clientes Front-End

Os clientes front-end foram desenvolvidos utilizando o framework Angular, proporcionando interfaces interativas e dinâmicas para as funcionalidades de login e chat.

## Instruções de Execução
- Importe a Máquina Virtual para o VirtualBox
- Inicie a Máquina Virtual
> Para acessar a Máquina Virtual, utilize o usuário `vboxuser` e a senha `123321`
> Caso, for necessário utilizar o usuário `root`, utilize a senha `123321`
- Abra um terminal e execute o comando `sudo ./script1.sh`
- Abra um terminal e execute o comando `./script2.sh`
> O script2.sh não deve ser executado em modo sudo
- Acesse a pagina www.projetofrc.com para acessar a aplicação
> Pode-se acessar via http ou https
- Cadastre seu usuário e faça login na aplicação utilizando o botão login na parte superior esquerda da tela.