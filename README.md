# Sistema de Gerenciamento de Atendimento de Saúde

## Descrição do Projeto
O Sistema de Gerenciamento de Atendimento de Saúde é uma aplicação web que otimiza o fluxo de atendimento em clínicas e hospitais. O sistema permite que recepcionistas, enfermeiros e médicos interajam com a plataforma conforme suas funções, proporcionando um atendimento mais eficiente e organizado.

## Funcionalidades

1. **Login Personalizado**
   - **Recepção:** Criação e gerenciamento inicial de atendimentos.
   - **Enfermagem:** Triagem de pacientes, coleta e atualização de dados clínicos.
   - **Médico:** Acesso aos dados da triagem e adição de informações ao prontuário do paciente.

2. **Sidebar Dinâmica**
   - Responsiva e personalizada para cada usuário, exibindo opções relevantes de navegação e fotos de perfil específicas.

3. **Gestão de Filas**
   - **Tempo de Espera em Tempo Real:** Atualização contínua do tempo de espera dos pacientes.
   - **Classificação por Urgência:** Organização dos pacientes por classificação de urgência.
   - **Ações Específicas:** Iniciar triagem, editar informações e iniciar atendimento médico conforme o usuário logado.

4. **Formulário de Triagem**
   - **Coleta de Dados Clínicos:** Campos para sintomas, alergias, peso, altura, pressão arterial, temperatura e saturação de oxigênio.
   - **Salvar e Atualizar Dados:** Salvamento dos dados da triagem, impedindo edições posteriores pela enfermagem.

5. **Atendimento Médico**
   - **Prontuário Médico:** Campos para o médico adicionar informações sobre o atendimento e diagnóstico.
   - **Conclusão do Atendimento:** Atualização do status do paciente para "Atendimento Médico Concluído" e pausa do tempo de espera.

6. **Responsividade**
   - A aplicação é totalmente responsiva, permitindo acesso eficiente em desktops, tablets e smartphones.

## Tecnologias Utilizadas
- **Front-end:** React, Styled-components, React Router.
- **Back-end:** Context API.
- **Design:** Design System GOV.BR.

## Objetivos do Projeto
Melhorar a eficiência e a qualidade do atendimento em clínicas e hospitais, reduzindo o tempo de espera dos pacientes, melhorando a comunicação entre áreas de atendimento e proporcionando um ambiente de trabalho mais organizado para os profissionais de saúde.

## Como Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
