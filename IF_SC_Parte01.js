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

//Aperta o listbox
const list_open = document.querySelector('#downshift-11-toggle-button');
list.click();

//Aperta o a opção 100 no listbox
const list100_select = document.querySelector('#downshift-11-item-4');
list100.click();

//Seleciona todos os clientes da tela
const Span_Select = document.querySelector('#micro-frontend-crm > div.indexstyles__Root-partner-portal-crm__sc-3qo625-0.kXfgum > div.indexstyles__Root-partner-portal-crm__sc-kd480-0.cdQLVe.indexstyles__CampaignsPageBody-partner-portal-crm__sc-4bw979-0.iZidhd > div.sc-duzrYq.jtmVIG > table > thead > tr > th:nth-child(1) > div.sc-fLlhyt.bdchqW > div > div > span');
SpanSelect.click();

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
for (const elemento of elementos) {
    // Obter o número do dia do elemento e converter para número
    const numeroDia = parseInt(elemento.textContent, 10);

    // Verificar se o número do dia é maior que o dia de hoje
    if (numeroDia > hoje.getDate()) {
        // Simular o clique no elemento
        elemento.click();
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
