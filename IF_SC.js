//Começamos a resolução a partir da Aba "Seus Clientes"

//Aperta do primeiro botão
const crieNovasPromo_button = document.querySelector("#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe > div.indexstyles__PageSectionWrapper-partner-portal-crm__sc-1xv6gqj-0.hQKZRA > div.sc-gGnURB.iJWWCJ > div.sc-crXcEl.jwSbcz > div > div > button");
crieNovasPromo_button.click();

//Clica na aba seguidores  
const seguidores_option = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.jRpMA-d > div:nth-child(1) > div.sc-bczRLJ.hbUVXt > span');
seguidores_option.click();

//Aperta o botão continuar. Aparece várias vezes no código
const continuar_button = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
continuar_button.click();

//Aperta o listbox. !! parece mudar de endereço dentro de "-n-"
const list_open = document.querySelector('#downshift-0-toggle-button');
list_open.click();

//Aperta o a opção 100 no listbox !! mesma situação do código anterior
const list100_select = document.querySelector('#downshift-94-item-4');
list100_select.click();

//Seleciona todos os clientes da tela
const Span_Select = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-duzrYq.jtmVIG > table > thead > tr > th:nth-child(1) > div.sc-fLlhyt.bdchqW > div > div > span');
Span_Select.click();

//Seleciona o botão continuar, novamente
const continuar_button = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
continuar_button.click();

//Seleciona entrega grátis
const entrega_select = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.iTOJzk > div:nth-child(1) > div.sc-bczRLJ.kJSGHS');
entrega_select.click();

//Seleciona o botão continuar, novamente
const continuar_button = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
continuar_button.click();

//Clica no input data
var clica_list = document.querySelector('#dueDate');
clica_list.click();

//Seleciona a data do dia de amanhã
// Obter a data de hoje
const hoje = new Date();

// Selecionar todos os elementos dentro de DayPicker-Week
const selector_quatrosemanas = document.querySelectorAll('.DayPicker-Week .DayPicker-inner-day');

// Iterar sobre os elementos para encontrar o primeiro número maior que o dia de hoje
for (const data of selector_quatrosemanas) {
    // Obter o número do dia do elemento e converter para número
    const numeroDia = parseInt(data.textContent, 10);

    // Verificar se o número do dia é maior que o dia de hoje
    if (numeroDia > hoje.getDate()) {
        // Simular o clique no elemento
        data.click();
        // Parar a iteração após o clique
        break;
    }
}

//Seleciona o botão continuar após a última ação
const continuar2_button = document.querySelector('body > div:nth-child(31) > div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO');
continuar2_button.click();

//Seleciona a opção - entrega grátis para quem segue
const final1_select = document.querySelector('body > div:nth-child(31) > div.sc-llJcti.eqJNn > div > div.sc-bZkfAO.eJQDwa > div > div > div:nth-child(4) > label');
final1_select.click();

//Seleciona o botão continuar após a seleção, novamente
const continuar2_button = document.querySelector('body > div:nth-child(31) > div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO');
continuar2_button.click();

//Seleciona o botão continuar após a última verificação, com o mesmo endereço
const continuar2_button = document.querySelector('body > div:nth-child(31) > div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO');
continuar2_button.click();

//fechar a última tela
//Seleciona o botão continuar após a última ação
const ultimatela_close = document.querySelector('body > div:nth-child(31) > div.sc-llJcti.eqJNn > div > div.sc-hKMtZM.eIDMHW.sc-ezWOiH.janTdf');
ultimatela_close.click();

//Começamos a resolução a partir da tela final do último código"

//Seleciona o botão continuar após a última verificação, com o mesmo endereço
const voltar_begin = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-1fkx9ru-0.jsPyvf > button');
voltar_begin.click();

//Aperta do primeiro botão
const crieNovasPromo_button = document.querySelector("#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe > div.indexstyles__PageSectionWrapper-partner-portal-crm__sc-1xv6gqj-0.hQKZRA > div.sc-gGnURB.iJWWCJ > div.sc-crXcEl.jwSbcz > div > div > button");
crieNovasPromo_button.click();

//Clica na aba quem adora comprar na loja !! observar o seletor desse código e comparar com o primeiro select. Ele aparecentemente funciona com 2 clicks
const opção2_select = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.jRpMA-d > div.sc-crXcEl.iKLSdb.indexstyles__CardWrapper-partner-portal-crm__sc-1rtmpyq-1.kdGjDu');
opção2_select.click();

//Aperta o botão continuar. Aparece várias vezes no código
const continuar_button = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
continuar_button.click();

//Aperta o listbox -   !! mesma situação de antes - mudança repetida de endereço do selector
const list_open = document.querySelector('#downshift-94-toggle-button');
list_open.click();

//Aperta o a opção 100 no listbox - sempre muda de endereço, e tem mesmo indíce do último !! mesma situação de antes
const list100_select = document.querySelector('#downshift-94-item-4');
list100_select.click();

//Seleciona todos os clientes da tela
const Span_Select = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-duzrYq.jtmVIG > table > thead > tr > th:nth-child(1) > div.sc-fLlhyt.bdchqW > div > div > span');
Span_Select.click();

//Seleciona o botão continuar, novamente
const continuar_button = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
continuar_button.click();

//Seleciona entrega grátis
const entrega_select = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-gGnURB.iTOJzk > div:nth-child(1) > div.sc-bczRLJ.kJSGHS');
entrega_select.click();

//Seleciona o botão continuar, novamente
const continuar_button = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-bczRLJ.cllSmU > button');
continuar_button.click();

//Clica no input data
var clica_list = document.querySelector('#dueDate');
clica_list.click();

//Seleciona a data do dia de amanhã
// Obter a data de hoje
const hoje = new Date();

// Selecionar todos os elementos dentro de DayPicker-Week
const selector_quatrosemanas = document.querySelectorAll('.DayPicker-Week .DayPicker-inner-day');

// Iterar sobre os elementos para encontrar o primeiro número maior que o dia de hoje
for (const data of selector_quatrosemanas) {
    // Obter o número do dia do elemento e converter para número
    const numeroDia = parseInt(data.textContent, 10);

    // Verificar se o número do dia é maior que o dia de hoje
    if (numeroDia > hoje.getDate()) {
        // Simular o clique no elemento
        data.click();
        // Parar a iteração após o clique
        break;
    }
}

//Seleciona o botão continuar após a última ação
const continuar2_button = document.querySelector('body > div:nth-child(32) > div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO');
continuar2_button.click();

//Seleciona a opção - entrega grátis para quem segue
const final1_select = document.querySelector('body > div:nth-child(32) > div.sc-llJcti.eqJNn > div > div.sc-bZkfAO.eJQDwa > div > div > div:nth-child(5) > label');
final1_select.click();

//Seleciona o botão continuar após a seleção, novamente
const continuar2_button = document.querySelector('body > div:nth-child(32) > div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO');
continuar2_button.click();

//Seleciona o botão continuar após a última verificação, com o mesmo endereço
const continuar2_button = document.querySelector('body > div:nth-child(32) > div.sc-llJcti.eqJNn > div > div.sc-kLLXSd.iRtpfu > div > div:nth-child(2) > button.sc-kDDrLX.kIdHRO');
continuar2_button.click();
